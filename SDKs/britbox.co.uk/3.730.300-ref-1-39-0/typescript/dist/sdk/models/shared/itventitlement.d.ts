import { SpeakeasyBase } from "../../../internal/utils";
export declare class ItvEntitlement extends SpeakeasyBase {
    cardType?: Date;
    expiry: Date;
    plan: Map<string, any>;
    source: string;
    subscriptionId: string;
}
