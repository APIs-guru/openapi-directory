import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ACH-specific details about `BANK_ACCOUNT` type payments with the `transfer_type` of `ACH`.
**/
export declare class PosBankAccountAchDetails extends SpeakeasyBase {
    accountNumberSuffix?: string;
    accountType?: string;
    routingNumber?: string;
}
/**
 * Card details for this payment. This field is currently not available. Reach out to our team for more info.
**/
export declare class PosBankAccount extends SpeakeasyBase {
    accountOwnershipType?: string;
    achDetails?: PosBankAccountAchDetails;
    bankName?: string;
    country?: string;
    fingerprint?: string;
    statementDescription?: string;
    transferType?: string;
}
