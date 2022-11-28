import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItvProfileTokenQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class GetItvProfileTokenSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class GetItvProfileTokenRequest extends SpeakeasyBase {
    queryParams: GetItvProfileTokenQueryParams;
    request: shared.ItvProfileTokenRequest;
    security: GetItvProfileTokenSecurity;
}
export declare class GetItvProfileTokenResponse extends SpeakeasyBase {
    contentType: string;
    itvProfileToken?: shared.ItvProfileToken;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
