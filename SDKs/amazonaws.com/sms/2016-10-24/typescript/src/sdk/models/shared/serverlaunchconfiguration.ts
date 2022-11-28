import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3Location } from "./s3location";
import { ScriptTypeEnum } from "./scripttypeenum";
import { Server } from "./server";
import { UserData } from "./userdata";



// ServerLaunchConfiguration
/** 
 * Launch configuration for a server.
**/
export class ServerLaunchConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=associatePublicIpAddress" })
  associatePublicIpAddress?: boolean;

  @SpeakeasyMetadata({ data: "json, name=configureScript" })
  configureScript?: S3Location;

  @SpeakeasyMetadata({ data: "json, name=configureScriptType" })
  configureScriptType?: ScriptTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ec2KeyName" })
  ec2KeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=iamInstanceProfileName" })
  iamInstanceProfileName?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceType" })
  instanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=logicalId" })
  logicalId?: string;

  @SpeakeasyMetadata({ data: "json, name=securityGroup" })
  securityGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: Server;

  @SpeakeasyMetadata({ data: "json, name=subnet" })
  subnet?: string;

  @SpeakeasyMetadata({ data: "json, name=userData" })
  userData?: UserData;

  @SpeakeasyMetadata({ data: "json, name=vpc" })
  vpc?: string;
}
