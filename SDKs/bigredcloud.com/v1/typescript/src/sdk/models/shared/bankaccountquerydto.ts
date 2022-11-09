import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BankAccountQueryDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=acCode" })
  acCode?: string;

  @Metadata({ data: "json, name=accountName" })
  accountName?: string;

  @Metadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @Metadata({ data: "json, name=address" })
  address?: string[];

  @Metadata({ data: "json, name=bankFeedSource" })
  bankFeedSource?: number;

  @Metadata({ data: "json, name=businessIdentifierCodes" })
  businessIdentifierCodes?: string;

  @Metadata({ data: "json, name=categoryId" })
  categoryId?: number;

  @Metadata({ data: "json, name=creditorScheme" })
  creditorScheme?: string;

  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=internationalBankAccountNumber" })
  internationalBankAccountNumber?: string;

  @Metadata({ data: "json, name=isDefaultBank" })
  isDefaultBank?: boolean;

  @Metadata({ data: "json, name=lastChq" })
  lastChq?: string;

  @Metadata({ data: "json, name=nominalAcCode" })
  nominalAcCode?: string;

  @Metadata({ data: "json, name=sortCode" })
  sortCode?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;
}
