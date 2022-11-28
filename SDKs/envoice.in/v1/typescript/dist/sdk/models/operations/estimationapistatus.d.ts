import { SpeakeasyBase } from "../../../internal/utils";
export declare class EstimationApiStatusQueryParams extends SpeakeasyBase {
    id: number;
}
export declare class EstimationApiStatusHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare enum EstimationApiStatus200ApplicationJsonEnum {
    Draft = "Draft",
    Accepted = "Accepted",
    Rejected = "Rejected"
}
export declare enum EstimationApiStatus200TextJsonEnum {
    Draft = "Draft",
    Accepted = "Accepted",
    Rejected = "Rejected"
}
export declare class EstimationApiStatusRequest extends SpeakeasyBase {
    queryParams: EstimationApiStatusQueryParams;
    headers: EstimationApiStatusHeaders;
}
export declare class EstimationApiStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    estimationApiStatus200ApplicationJsonStringEnum?: EstimationApiStatus200ApplicationJsonEnum;
    estimationApiStatus200TextJsonStringEnum?: EstimationApiStatus200TextJsonEnum;
    statusCode: number;
}
