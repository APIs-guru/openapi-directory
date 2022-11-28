import { SpeakeasyBase } from "../../../internal/utils";
import { EstimationUpdateAttachmentApiModel } from "./estimationupdateattachmentapimodel";
import { EstimationUpdateItemApiModel } from "./estimationupdateitemapimodel";
import { EstimationGatewayApiModel } from "./estimationgatewayapimodel";
export declare enum EstimationUpdateApiModelStatusEnum {
    Draft = "Draft",
    Accepted = "Accepted",
    Rejected = "Rejected"
}
export declare class EstimationUpdateApiModel extends SpeakeasyBase {
    attachments?: EstimationUpdateAttachmentApiModel[];
    clientId?: number;
    clonedFromId?: number;
    currencyId?: number;
    expiresOn?: Date;
    id?: number;
    issuedOn?: Date;
    items?: EstimationUpdateItemApiModel[];
    notes?: string;
    number?: string;
    paymentGateways?: EstimationGatewayApiModel[];
    poNumber?: string;
    status?: EstimationUpdateApiModelStatusEnum;
    terms?: string;
}
