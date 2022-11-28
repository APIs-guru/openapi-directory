import { SpeakeasyBase } from "../../../internal/utils";
export declare class BankAccountDto extends SpeakeasyBase {
    acCode?: string;
    accountName?: string;
    accountNumber?: string;
    address?: string[];
    bankFeedSource?: number;
    businessIdentifierCodes?: string;
    categoryId?: number;
    creditorScheme?: string;
    details?: string;
    id?: number;
    internationalBankAccountNumber?: string;
    isDefaultBank?: boolean;
    lastChq?: string;
    nominalAcCode?: string;
    oBalance?: number;
    sortCode?: string;
    timestamp?: string;
}
