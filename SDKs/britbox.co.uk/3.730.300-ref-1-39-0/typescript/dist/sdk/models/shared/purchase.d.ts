import { SpeakeasyBase } from "../../../internal/utils";
import { ItemPurchase } from "./itempurchase";
import { PlanPurchase } from "./planpurchase";
export declare class Purchase extends SpeakeasyBase {
    authorizationDate?: Date;
    creationDate: Date;
    currency: string;
    id: string;
    item?: ItemPurchase;
    paymentMethodId?: string;
    plan?: PlanPurchase;
    total: number;
}
