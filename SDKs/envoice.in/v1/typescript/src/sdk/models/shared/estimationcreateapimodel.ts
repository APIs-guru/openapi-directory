import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EstimationCreateAttachmentApiModel } from "./estimationcreateattachmentapimodel";
import { EstimationCreateItemApiModel } from "./estimationcreateitemapimodel";
import { EstimationGatewayApiModel } from "./estimationgatewayapimodel";


export enum EstimationCreateApiModelStatusEnum {
    Draft = "Draft",
    Accepted = "Accepted",
    Rejected = "Rejected"
}


export class EstimationCreateApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attachments", elemType: EstimationCreateAttachmentApiModel })
  attachments?: EstimationCreateAttachmentApiModel[];

  @SpeakeasyMetadata({ data: "json, name=ClientId" })
  clientId?: number;

  @SpeakeasyMetadata({ data: "json, name=ClonedFromId" })
  clonedFromId?: number;

  @SpeakeasyMetadata({ data: "json, name=CurrencyId" })
  currencyId?: number;

  @SpeakeasyMetadata({ data: "json, name=ExpiresOn" })
  expiresOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=IssuedOn" })
  issuedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: EstimationCreateItemApiModel })
  items?: EstimationCreateItemApiModel[];

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=Number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=PaymentGateways", elemType: EstimationGatewayApiModel })
  paymentGateways?: EstimationGatewayApiModel[];

  @SpeakeasyMetadata({ data: "json, name=PoNumber" })
  poNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: EstimationCreateApiModelStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Terms" })
  terms?: string;
}
