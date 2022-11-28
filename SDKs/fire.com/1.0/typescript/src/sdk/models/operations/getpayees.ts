import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetPayeesPayeeCreatedByEnum {
    Customer = "CUSTOMER",
    Lodgement = "LODGEMENT",
    DirectDebit = "DIRECT DEBIT",
    OpenBanking = "OPEN BANKING",
    FireOpenPayment = "FIRE OPEN PAYMENT",
    FireDirect = "FIRE DIRECT"
}

export enum GetPayeesPayeeStatusEnum {
    Created = "CREATED",
    Live = "LIVE",
    Closed = "CLOSED",
    Archived = "ARCHIVED"
}


export class GetPayeesPayee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountHolderName" })
  accountHolderName?: string;

  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=bic" })
  bic?: string;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: GetPayeesPayeeCreatedByEnum;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency;

  @SpeakeasyMetadata({ data: "json, name=dateCreated" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=iban" })
  iban?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=nsc" })
  nsc?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetPayeesPayeeStatusEnum;
}


export class GetPayeesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  payee?: GetPayeesPayee;

  @SpeakeasyMetadata()
  statusCode: number;
}
