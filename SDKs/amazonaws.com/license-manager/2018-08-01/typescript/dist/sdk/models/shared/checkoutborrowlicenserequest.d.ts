import { SpeakeasyBase } from "../../../internal/utils";
import { Metadata } from "./metadata";
import { DigitalSignatureMethodEnum } from "./digitalsignaturemethodenum";
import { EntitlementData } from "./entitlementdata";
export declare class CheckoutBorrowLicenseRequest extends SpeakeasyBase {
    checkoutMetadata?: Metadata[];
    clientToken: string;
    digitalSignatureMethod: DigitalSignatureMethodEnum;
    entitlements: EntitlementData[];
    licenseArn: string;
    nodeId?: string;
}
