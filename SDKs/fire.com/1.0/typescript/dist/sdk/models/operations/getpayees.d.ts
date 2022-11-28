import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetPayeesPayeeCreatedByEnum {
    Customer = "CUSTOMER",
    Lodgement = "LODGEMENT",
    DirectDebit = "DIRECT DEBIT",
    OpenBanking = "OPEN BANKING",
    FireOpenPayment = "FIRE OPEN PAYMENT",
    FireDirect = "FIRE DIRECT"
}
export declare enum GetPayeesPayeeStatusEnum {
    Created = "CREATED",
    Live = "LIVE",
    Closed = "CLOSED",
    Archived = "ARCHIVED"
}
export declare class GetPayeesPayee extends SpeakeasyBase {
    accountHolderName?: string;
    accountName?: string;
    accountNumber?: string;
    bic?: string;
    createdBy?: GetPayeesPayeeCreatedByEnum;
    currency?: shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency;
    dateCreated?: Date;
    iban?: string;
    id?: number;
    nsc?: string;
    status?: GetPayeesPayeeStatusEnum;
}
export declare class GetPayeesResponse extends SpeakeasyBase {
    contentType: string;
    payee?: GetPayeesPayee;
    statusCode: number;
}
