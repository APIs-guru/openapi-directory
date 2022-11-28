import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlanPurchaseTypeEnum {
    Free = "Free",
    Subscription = "Subscription"
}
export declare class PlanPurchase extends SpeakeasyBase {
    id?: string;
    price?: number;
    subscriptionId?: string;
    title: string;
    type: PlanPurchaseTypeEnum;
}
