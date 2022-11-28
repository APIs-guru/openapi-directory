import { SpeakeasyBase } from "../../../internal/utils";
export declare class BankAccountQueryDto extends SpeakeasyBase {
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
    sortCode?: string;
    timestamp?: string;
}
