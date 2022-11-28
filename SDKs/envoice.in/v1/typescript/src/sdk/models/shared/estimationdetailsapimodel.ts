import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientDetailsApiModel } from "./clientdetailsapimodel";
import { CurrencyDetailsApiModel } from "./currencydetailsapimodel";


export enum EstimationDetailsApiModelStatusEnum {
    Draft = "Draft",
    Accepted = "Accepted",
    Rejected = "Rejected"
}


export class EstimationDetailsApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Client" })
  client?: ClientDetailsApiModel;

  @SpeakeasyMetadata({ data: "json, name=ClonedFromId" })
  clonedFromId?: number;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency?: CurrencyDetailsApiModel;

  @SpeakeasyMetadata({ data: "json, name=DiscountAmount" })
  discountAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=ExpiresOn" })
  expiresOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=IssuedOn" })
  issuedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=Number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=PoNumber" })
  poNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: EstimationDetailsApiModelStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=SubTotalAmount" })
  subTotalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=TaxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=Terms" })
  terms?: string;

  @SpeakeasyMetadata({ data: "json, name=TotalAmount" })
  totalAmount?: number;
}
