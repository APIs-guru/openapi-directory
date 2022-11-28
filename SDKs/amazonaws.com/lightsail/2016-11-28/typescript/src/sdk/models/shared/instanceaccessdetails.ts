import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HostKeyAttributes } from "./hostkeyattributes";
import { PasswordData } from "./passworddata";
import { InstanceAccessProtocolEnum } from "./instanceaccessprotocolenum";



// InstanceAccessDetails
/** 
 * The parameters for gaining temporary access to one of your Amazon Lightsail instances.
**/
export class InstanceAccessDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certKey" })
  certKey?: string;

  @SpeakeasyMetadata({ data: "json, name=expiresAt" })
  expiresAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=hostKeys", elemType: HostKeyAttributes })
  hostKeys?: HostKeyAttributes[];

  @SpeakeasyMetadata({ data: "json, name=instanceName" })
  instanceName?: string;

  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=passwordData" })
  passwordData?: PasswordData;

  @SpeakeasyMetadata({ data: "json, name=privateKey" })
  privateKey?: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: InstanceAccessProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
