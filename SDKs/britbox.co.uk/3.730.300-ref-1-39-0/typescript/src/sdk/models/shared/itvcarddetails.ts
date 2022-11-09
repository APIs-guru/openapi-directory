import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvCardDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=card_type" })
  cardType: string;

  @Metadata({ data: "json, name=exp_month" })
  expMonth: number;

  @Metadata({ data: "json, name=exp_year" })
  expYear: number;

  @Metadata({ data: "json, name=last4" })
  last4: string;
}
