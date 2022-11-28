import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvCardDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=card_type" })
  cardType: string;

  @SpeakeasyMetadata({ data: "json, name=exp_month" })
  expMonth: number;

  @SpeakeasyMetadata({ data: "json, name=exp_year" })
  expYear: number;

  @SpeakeasyMetadata({ data: "json, name=last4" })
  last4: string;
}
