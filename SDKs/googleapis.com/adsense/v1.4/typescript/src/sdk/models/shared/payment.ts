import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Payment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentAmount" })
  paymentAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentAmountCurrencyCode" })
  paymentAmountCurrencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentDate" })
  paymentDate?: string;
}
