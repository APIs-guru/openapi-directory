import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PosBankAccountAchDetails
/** 
 * ACH-specific details about `BANK_ACCOUNT` type payments with the `transfer_type` of `ACH`.
**/
export class PosBankAccountAchDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_number_suffix" })
  accountNumberSuffix?: string;

  @SpeakeasyMetadata({ data: "json, name=account_type" })
  accountType?: string;

  @SpeakeasyMetadata({ data: "json, name=routing_number" })
  routingNumber?: string;
}


// PosBankAccount
/** 
 * Card details for this payment. This field is currently not available. Reach out to our team for more info.
**/
export class PosBankAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_ownership_type" })
  accountOwnershipType?: string;

  @SpeakeasyMetadata({ data: "json, name=ach_details" })
  achDetails?: PosBankAccountAchDetails;

  @SpeakeasyMetadata({ data: "json, name=bank_name" })
  bankName?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=statement_description" })
  statementDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=transfer_type" })
  transferType?: string;
}
