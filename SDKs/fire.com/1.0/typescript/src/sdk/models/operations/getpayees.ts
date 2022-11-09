import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetPayeesPayeeCreatedByEnum {
    Customer = "CUSTOMER"
,    Lodgement = "LODGEMENT"
,    DirectDebit = "DIRECT DEBIT"
,    OpenBanking = "OPEN BANKING"
,    FireOpenPayment = "FIRE OPEN PAYMENT"
,    FireDirect = "FIRE DIRECT"
}

export enum GetPayeesPayeeStatusEnum {
    Created = "CREATED"
,    Live = "LIVE"
,    Closed = "CLOSED"
,    Archived = "ARCHIVED"
}


export class GetPayeesPayee extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountHolderName" })
  accountHolderName?: string;

  @Metadata({ data: "json, name=accountName" })
  accountName?: string;

  @Metadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @Metadata({ data: "json, name=bic" })
  bic?: string;

  @Metadata({ data: "json, name=createdBy" })
  createdBy?: GetPayeesPayeeCreatedByEnum;

  @Metadata({ data: "json, name=currency" })
  currency?: shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency;

  @Metadata({ data: "json, name=dateCreated" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=iban" })
  iban?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=nsc" })
  nsc?: string;

  @Metadata({ data: "json, name=status" })
  status?: GetPayeesPayeeStatusEnum;
}


export class GetPayeesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  payee?: GetPayeesPayee;

  @Metadata()
  statusCode: number;
}
