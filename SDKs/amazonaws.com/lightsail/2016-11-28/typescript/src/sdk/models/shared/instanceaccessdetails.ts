import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HostKeyAttributes } from "./hostkeyattributes";
import { PasswordData } from "./passworddata";
import { InstanceAccessProtocolEnum } from "./instanceaccessprotocolenum";


// InstanceAccessDetails
/** 
 * The parameters for gaining temporary access to one of your Amazon Lightsail instances.
**/
export class InstanceAccessDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=certKey" })
  certKey?: string;

  @Metadata({ data: "json, name=expiresAt" })
  expiresAt?: Date;

  @Metadata({ data: "json, name=hostKeys", elemType: shared.HostKeyAttributes })
  hostKeys?: HostKeyAttributes[];

  @Metadata({ data: "json, name=instanceName" })
  instanceName?: string;

  @Metadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=passwordData" })
  passwordData?: PasswordData;

  @Metadata({ data: "json, name=privateKey" })
  privateKey?: string;

  @Metadata({ data: "json, name=protocol" })
  protocol?: InstanceAccessProtocolEnum;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
