import { SpeakeasyBase } from "../../../internal/utils";
import { EstimationCreateAttachmentApiModel } from "./estimationcreateattachmentapimodel";
import { EstimationCreateItemApiModel } from "./estimationcreateitemapimodel";
import { EstimationGatewayApiModel } from "./estimationgatewayapimodel";
export declare enum EstimationCreateApiModelStatusEnum {
    Draft = "Draft",
    Accepted = "Accepted",
    Rejected = "Rejected"
}
export declare class EstimationCreateApiModel extends SpeakeasyBase {
    attachments?: EstimationCreateAttachmentApiModel[];
    clientId?: number;
    clonedFromId?: number;
    currencyId?: number;
    expiresOn?: Date;
    issuedOn?: Date;
    items?: EstimationCreateItemApiModel[];
    notes?: string;
    number?: string;
    paymentGateways?: EstimationGatewayApiModel[];
    poNumber?: string;
    status?: EstimationCreateApiModelStatusEnum;
    terms?: string;
}
