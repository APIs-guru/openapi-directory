import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserInfo } from "./userinfo";
import { UserInfo } from "./userinfo";


// Webhook
/** 
 * Webhook information
**/
export class Webhook extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=createdBy" })
  createdBy?: UserInfo;

  @Metadata({ data: "json, name=eventTypeNames" })
  eventTypeNames: string[];

  @Metadata({ data: "json, name=expireAt" })
  expireAt: Date;

  @Metadata({ data: "json, name=failStatus" })
  failStatus?: number;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=isEnabled" })
  isEnabled: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt: Date;

  @Metadata({ data: "json, name=updatedBy" })
  updatedBy?: UserInfo;

  @Metadata({ data: "json, name=url" })
  url: string;
}
