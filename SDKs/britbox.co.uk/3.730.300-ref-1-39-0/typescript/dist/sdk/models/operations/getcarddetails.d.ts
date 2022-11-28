import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCardDetailsPathParams extends SpeakeasyBase {
    platform: string;
}
export declare class GetCardDetailsQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class GetCardDetailsSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class GetCardDetailsRequest extends SpeakeasyBase {
    pathParams: GetCardDetailsPathParams;
    queryParams: GetCardDetailsQueryParams;
    request: shared.ItvGetCardDetailsRequest;
    security: GetCardDetailsSecurity;
}
export declare class GetCardDetailsResponse extends SpeakeasyBase {
    contentType: string;
    itvCardDetails?: shared.ItvCardDetails;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
