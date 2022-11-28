import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EstimationUpdateAttachmentApiModel } from "./estimationupdateattachmentapimodel";
import { EstimationUpdateItemApiModel } from "./estimationupdateitemapimodel";
import { EstimationGatewayApiModel } from "./estimationgatewayapimodel";


export enum EstimationUpdateApiModelStatusEnum {
    Draft = "Draft",
    Accepted = "Accepted",
    Rejected = "Rejected"
}


export class EstimationUpdateApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attachments", elemType: EstimationUpdateAttachmentApiModel })
  attachments?: EstimationUpdateAttachmentApiModel[];

  @SpeakeasyMetadata({ data: "json, name=ClientId" })
  clientId?: number;

  @SpeakeasyMetadata({ data: "json, name=ClonedFromId" })
  clonedFromId?: number;

  @SpeakeasyMetadata({ data: "json, name=CurrencyId" })
  currencyId?: number;

  @SpeakeasyMetadata({ data: "json, name=ExpiresOn" })
  expiresOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=IssuedOn" })
  issuedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: EstimationUpdateItemApiModel })
  items?: EstimationUpdateItemApiModel[];

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=Number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=PaymentGateways", elemType: EstimationGatewayApiModel })
  paymentGateways?: EstimationGatewayApiModel[];

  @SpeakeasyMetadata({ data: "json, name=PoNumber" })
  poNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: EstimationUpdateApiModelStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Terms" })
  terms?: string;
}
