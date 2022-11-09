import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvCancelSubscriptionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=profileToken" })
  profileToken: string;
}
