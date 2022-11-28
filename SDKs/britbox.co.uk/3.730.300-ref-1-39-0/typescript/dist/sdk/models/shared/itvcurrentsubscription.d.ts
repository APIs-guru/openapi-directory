import { SpeakeasyBase } from "../../../internal/utils";
export declare class ItvCurrentSubscription extends SpeakeasyBase {
    cancelAtPeriodEnd: boolean;
    collectionMethod: string;
    created: number;
    currentPeriodEnd: number;
    currentPeriodStart: number;
    plan: Map<string, any>;
    status: string;
}
