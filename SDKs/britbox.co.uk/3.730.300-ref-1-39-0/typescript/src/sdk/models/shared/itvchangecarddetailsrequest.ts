import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvChangeCardDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cardToken" })
  cardToken: string;

  @SpeakeasyMetadata({ data: "json, name=profileToken" })
  profileToken: string;
}
