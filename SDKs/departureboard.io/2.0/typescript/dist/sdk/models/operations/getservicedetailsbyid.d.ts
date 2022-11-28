import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetServiceDetailsByIdPathParams extends SpeakeasyBase {
    serviceId: string;
}
export declare class GetServiceDetailsByIdQueryParams extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetServiceDetailsByIdRequest extends SpeakeasyBase {
    pathParams: GetServiceDetailsByIdPathParams;
    queryParams: GetServiceDetailsByIdQueryParams;
}
export declare class GetServiceDetailsByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
