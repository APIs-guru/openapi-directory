import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvCancelSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=profileToken" })
  profileToken: string;
}
