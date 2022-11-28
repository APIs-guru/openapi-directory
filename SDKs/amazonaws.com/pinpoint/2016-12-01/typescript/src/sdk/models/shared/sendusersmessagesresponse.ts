import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SendUsersMessageResponse } from "./sendusersmessageresponse";



export class SendUsersMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SendUsersMessageResponse" })
  sendUsersMessageResponse: SendUsersMessageResponse;
}
