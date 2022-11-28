import { SpeakeasyBase } from "../../../internal/utils";
import { ClientDetailsApiModel } from "./clientdetailsapimodel";
import { CurrencyDetailsApiModel } from "./currencydetailsapimodel";
export declare enum EstimationDetailsApiModelStatusEnum {
    Draft = "Draft",
    Accepted = "Accepted",
    Rejected = "Rejected"
}
export declare class EstimationDetailsApiModel extends SpeakeasyBase {
    accessToken?: string;
    client?: ClientDetailsApiModel;
    clonedFromId?: number;
    currency?: CurrencyDetailsApiModel;
    discountAmount?: number;
    expiresOn?: Date;
    id?: number;
    issuedOn?: Date;
    notes?: string;
    number?: string;
    poNumber?: string;
    status?: EstimationDetailsApiModelStatusEnum;
    subTotalAmount?: number;
    taxAmount?: number;
    terms?: string;
    totalAmount?: number;
}
