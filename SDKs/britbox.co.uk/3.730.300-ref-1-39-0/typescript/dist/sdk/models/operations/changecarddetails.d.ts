import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChangeCardDetailsPathParams extends SpeakeasyBase {
    platform: string;
}
export declare class ChangeCardDetailsQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class ChangeCardDetailsSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class ChangeCardDetailsRequest extends SpeakeasyBase {
    pathParams: ChangeCardDetailsPathParams;
    queryParams: ChangeCardDetailsQueryParams;
    request: shared.ItvChangeCardDetailsRequest;
    security: ChangeCardDetailsSecurity;
}
export declare class ChangeCardDetailsResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
