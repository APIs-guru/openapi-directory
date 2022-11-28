import { SpeakeasyBase } from "../../../internal/utils";
import { EftBankDto } from "./eftbankdto";
export declare class CustomerQueryDto extends SpeakeasyBase {
    accountName?: string;
    accountNumber?: string;
    address?: string[];
    authCode?: string;
    bank?: EftBankDto;
    businessIdentifierCode?: string;
    code?: string;
    contact?: string;
    delivery?: string[];
    eFtReference?: string;
    email?: string;
    fax?: string;
    id?: number;
    internationalBankAccountNumber?: string;
    mobile?: string;
    name?: string;
    ourCode?: string;
    ownerTypeId?: number;
    phone?: string;
    timestamp?: string;
    vatAnalysisTypeId?: number;
    vatReg?: string;
    vatType?: number;
}
