import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ItemPurchase } from "./itempurchase";
import { PlanPurchase } from "./planpurchase";


export class Purchase extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizationDate" })
  authorizationDate?: Date;

  @Metadata({ data: "json, name=creationDate" })
  creationDate: Date;

  @Metadata({ data: "json, name=currency" })
  currency: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=item" })
  item?: ItemPurchase;

  @Metadata({ data: "json, name=paymentMethodId" })
  paymentMethodId?: string;

  @Metadata({ data: "json, name=plan" })
  plan?: PlanPurchase;

  @Metadata({ data: "json, name=total" })
  total: number;
}
