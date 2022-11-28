import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BankAccountQueryDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acCode" })
  acCode?: string;

  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string[];

  @SpeakeasyMetadata({ data: "json, name=bankFeedSource" })
  bankFeedSource?: number;

  @SpeakeasyMetadata({ data: "json, name=businessIdentifierCodes" })
  businessIdentifierCodes?: string;

  @SpeakeasyMetadata({ data: "json, name=categoryId" })
  categoryId?: number;

  @SpeakeasyMetadata({ data: "json, name=creditorScheme" })
  creditorScheme?: string;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=internationalBankAccountNumber" })
  internationalBankAccountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=isDefaultBank" })
  isDefaultBank?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastChq" })
  lastChq?: string;

  @SpeakeasyMetadata({ data: "json, name=nominalAcCode" })
  nominalAcCode?: string;

  @SpeakeasyMetadata({ data: "json, name=sortCode" })
  sortCode?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;
}
