import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Location } from "./s3location";
import { ScriptTypeEnum } from "./scripttypeenum";
import { Server } from "./server";
import { UserData } from "./userdata";


// ServerLaunchConfiguration
/** 
 * Launch configuration for a server.
**/
export class ServerLaunchConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=associatePublicIpAddress" })
  associatePublicIpAddress?: boolean;

  @Metadata({ data: "json, name=configureScript" })
  configureScript?: S3Location;

  @Metadata({ data: "json, name=configureScriptType" })
  configureScriptType?: ScriptTypeEnum;

  @Metadata({ data: "json, name=ec2KeyName" })
  ec2KeyName?: string;

  @Metadata({ data: "json, name=iamInstanceProfileName" })
  iamInstanceProfileName?: string;

  @Metadata({ data: "json, name=instanceType" })
  instanceType?: string;

  @Metadata({ data: "json, name=logicalId" })
  logicalId?: string;

  @Metadata({ data: "json, name=securityGroup" })
  securityGroup?: string;

  @Metadata({ data: "json, name=server" })
  server?: Server;

  @Metadata({ data: "json, name=subnet" })
  subnet?: string;

  @Metadata({ data: "json, name=userData" })
  userData?: UserData;

  @Metadata({ data: "json, name=vpc" })
  vpc?: string;
}
