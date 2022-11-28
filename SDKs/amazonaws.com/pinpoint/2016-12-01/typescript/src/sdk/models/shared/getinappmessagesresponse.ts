import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InAppMessagesResponse } from "./inappmessagesresponse";



export class GetInAppMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InAppMessagesResponse" })
  inAppMessagesResponse: InAppMessagesResponse;
}
