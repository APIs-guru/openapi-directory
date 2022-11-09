import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PosBankAccountAchDetails
/** 
 * ACH-specific details about `BANK_ACCOUNT` type payments with the `transfer_type` of `ACH`.
**/
export class PosBankAccountAchDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_number_suffix" })
  accountNumberSuffix?: string;

  @Metadata({ data: "json, name=account_type" })
  accountType?: string;

  @Metadata({ data: "json, name=routing_number" })
  routingNumber?: string;
}


// PosBankAccount
/** 
 * Card details for this payment. This field is currently not available. Reach out to our team for more info.
**/
export class PosBankAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_ownership_type" })
  accountOwnershipType?: string;

  @Metadata({ data: "json, name=ach_details" })
  achDetails?: PosBankAccountAchDetails;

  @Metadata({ data: "json, name=bank_name" })
  bankName?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=statement_description" })
  statementDescription?: string;

  @Metadata({ data: "json, name=transfer_type" })
  transferType?: string;
}
