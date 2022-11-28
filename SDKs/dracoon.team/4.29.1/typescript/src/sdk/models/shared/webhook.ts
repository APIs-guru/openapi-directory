import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";



// Webhook
/** 
 * Webhook information
**/
export class Webhook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: UserInfo;

  @SpeakeasyMetadata({ data: "json, name=eventTypeNames" })
  eventTypeNames: string[];

  @SpeakeasyMetadata({ data: "json, name=expireAt" })
  expireAt: Date;

  @SpeakeasyMetadata({ data: "json, name=failStatus" })
  failStatus?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=isEnabled" })
  isEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=updatedBy" })
  updatedBy?: UserInfo;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
