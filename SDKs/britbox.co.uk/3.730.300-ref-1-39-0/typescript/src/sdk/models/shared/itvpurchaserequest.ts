import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvPurchaseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cardToken" })
  cardToken: string;

  @Metadata({ data: "json, name=planId" })
  planId: string;

  @Metadata({ data: "json, name=profileToken" })
  profileToken: string;

  @Metadata({ data: "json, name=voucher" })
  voucher?: string;
}
