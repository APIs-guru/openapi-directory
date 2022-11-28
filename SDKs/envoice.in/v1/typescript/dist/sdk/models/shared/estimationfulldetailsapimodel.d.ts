import { SpeakeasyBase } from "../../../internal/utils";
import { EstimationActivityApiModel } from "./estimationactivityapimodel";
import { EstimationAttachmentApiModel } from "./estimationattachmentapimodel";
import { ClientDetailsApiModel } from "./clientdetailsapimodel";
import { CurrencyDetailsApiModel } from "./currencydetailsapimodel";
import { EstimationItemApiModel } from "./estimationitemapimodel";
import { EstimationGatewayApiModel } from "./estimationgatewayapimodel";
export declare enum EstimationFullDetailsApiModelStatusEnum {
    Draft = "Draft",
    Accepted = "Accepted",
    Rejected = "Rejected"
}
export declare class EstimationFullDetailsApiModel extends SpeakeasyBase {
    accessToken?: string;
    activities?: EstimationActivityApiModel[];
    attachments?: EstimationAttachmentApiModel[];
    client?: ClientDetailsApiModel;
    clonedFromId?: number;
    currency?: CurrencyDetailsApiModel;
    discountAmount?: number;
    expiresOn?: Date;
    id?: number;
    issuedOn?: Date;
    items?: EstimationItemApiModel[];
    notes?: string;
    number?: string;
    paymentGateways?: EstimationGatewayApiModel[];
    poNumber?: string;
    status?: EstimationFullDetailsApiModelStatusEnum;
    subTotalAmount?: number;
    taxAmount?: number;
    terms?: string;
    totalAmount?: number;
}
