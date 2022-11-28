import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvPurchaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cardToken" })
  cardToken: string;

  @SpeakeasyMetadata({ data: "json, name=planId" })
  planId: string;

  @SpeakeasyMetadata({ data: "json, name=profileToken" })
  profileToken: string;

  @SpeakeasyMetadata({ data: "json, name=voucher" })
  voucher?: string;
}
