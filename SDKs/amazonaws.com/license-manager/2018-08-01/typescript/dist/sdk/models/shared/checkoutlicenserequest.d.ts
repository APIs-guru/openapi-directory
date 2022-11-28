import { SpeakeasyBase } from "../../../internal/utils";
import { CheckoutTypeEnum } from "./checkouttypeenum";
import { EntitlementData } from "./entitlementdata";
export declare class CheckoutLicenseRequest extends SpeakeasyBase {
    beneficiary?: string;
    checkoutType: CheckoutTypeEnum;
    clientToken: string;
    entitlements: EntitlementData[];
    keyFingerprint: string;
    nodeId?: string;
    productSku: string;
}
