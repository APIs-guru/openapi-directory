import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvChangeCardDetailsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cardToken" })
  cardToken: string;

  @Metadata({ data: "json, name=profileToken" })
  profileToken: string;
}
