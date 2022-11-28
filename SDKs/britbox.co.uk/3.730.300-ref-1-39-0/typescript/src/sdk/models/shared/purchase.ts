import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ItemPurchase } from "./itempurchase";
import { PlanPurchase } from "./planpurchase";



export class Purchase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizationDate" })
  authorizationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: ItemPurchase;

  @SpeakeasyMetadata({ data: "json, name=paymentMethodId" })
  paymentMethodId?: string;

  @SpeakeasyMetadata({ data: "json, name=plan" })
  plan?: PlanPurchase;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}
