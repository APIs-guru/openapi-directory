import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EstimationActivityApiModel } from "./estimationactivityapimodel";
import { EstimationAttachmentApiModel } from "./estimationattachmentapimodel";
import { ClientDetailsApiModel } from "./clientdetailsapimodel";
import { CurrencyDetailsApiModel } from "./currencydetailsapimodel";
import { EstimationItemApiModel } from "./estimationitemapimodel";
import { EstimationGatewayApiModel } from "./estimationgatewayapimodel";


export enum EstimationFullDetailsApiModelStatusEnum {
    Draft = "Draft",
    Accepted = "Accepted",
    Rejected = "Rejected"
}


export class EstimationFullDetailsApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Activities", elemType: EstimationActivityApiModel })
  activities?: EstimationActivityApiModel[];

  @SpeakeasyMetadata({ data: "json, name=Attachments", elemType: EstimationAttachmentApiModel })
  attachments?: EstimationAttachmentApiModel[];

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

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: EstimationItemApiModel })
  items?: EstimationItemApiModel[];

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=Number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=PaymentGateways", elemType: EstimationGatewayApiModel })
  paymentGateways?: EstimationGatewayApiModel[];

  @SpeakeasyMetadata({ data: "json, name=PoNumber" })
  poNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: EstimationFullDetailsApiModelStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=SubTotalAmount" })
  subTotalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=TaxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=Terms" })
  terms?: string;

  @SpeakeasyMetadata({ data: "json, name=TotalAmount" })
  totalAmount?: number;
}
