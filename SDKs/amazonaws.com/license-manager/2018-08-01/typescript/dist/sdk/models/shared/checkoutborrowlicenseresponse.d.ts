import { SpeakeasyBase } from "../../../internal/utils";
import { Metadata } from "./metadata";
import { EntitlementData } from "./entitlementdata";
export declare class CheckoutBorrowLicenseResponse extends SpeakeasyBase {
    checkoutMetadata?: Metadata[];
    entitlementsAllowed?: EntitlementData[];
    expiration?: string;
    issuedAt?: string;
    licenseArn?: string;
    licenseConsumptionToken?: string;
    nodeId?: string;
    signedToken?: string;
}
