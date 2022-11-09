import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EstimationActivityApiModel } from "./estimationactivityapimodel";
import { EstimationAttachmentApiModel } from "./estimationattachmentapimodel";
import { ClientDetailsApiModel } from "./clientdetailsapimodel";
import { CurrencyDetailsApiModel } from "./currencydetailsapimodel";
import { EstimationItemApiModel } from "./estimationitemapimodel";
import { EstimationGatewayApiModel } from "./estimationgatewayapimodel";

export enum EstimationFullDetailsApiModelStatusEnum {
    Draft = "Draft"
,    Accepted = "Accepted"
,    Rejected = "Rejected"
}


export class EstimationFullDetailsApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=Activities", elemType: shared.EstimationActivityApiModel })
  activities?: EstimationActivityApiModel[];

  @Metadata({ data: "json, name=Attachments", elemType: shared.EstimationAttachmentApiModel })
  attachments?: EstimationAttachmentApiModel[];

  @Metadata({ data: "json, name=Client" })
  client?: ClientDetailsApiModel;

  @Metadata({ data: "json, name=ClonedFromId" })
  clonedFromId?: number;

  @Metadata({ data: "json, name=Currency" })
  currency?: CurrencyDetailsApiModel;

  @Metadata({ data: "json, name=DiscountAmount" })
  discountAmount?: number;

  @Metadata({ data: "json, name=ExpiresOn" })
  expiresOn?: Date;

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=IssuedOn" })
  issuedOn?: Date;

  @Metadata({ data: "json, name=Items", elemType: shared.EstimationItemApiModel })
  items?: EstimationItemApiModel[];

  @Metadata({ data: "json, name=Notes" })
  notes?: string;

  @Metadata({ data: "json, name=Number" })
  number?: string;

  @Metadata({ data: "json, name=PaymentGateways", elemType: shared.EstimationGatewayApiModel })
  paymentGateways?: EstimationGatewayApiModel[];

  @Metadata({ data: "json, name=PoNumber" })
  poNumber?: string;

  @Metadata({ data: "json, name=Status" })
  status?: EstimationFullDetailsApiModelStatusEnum;

  @Metadata({ data: "json, name=SubTotalAmount" })
  subTotalAmount?: number;

  @Metadata({ data: "json, name=TaxAmount" })
  taxAmount?: number;

  @Metadata({ data: "json, name=Terms" })
  terms?: string;

  @Metadata({ data: "json, name=TotalAmount" })
  totalAmount?: number;
}
