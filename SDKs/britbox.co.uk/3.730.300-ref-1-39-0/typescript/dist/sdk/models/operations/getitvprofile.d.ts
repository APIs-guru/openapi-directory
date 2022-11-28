import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItvProfileQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class GetItvProfileSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class GetItvProfileRequest extends SpeakeasyBase {
    queryParams: GetItvProfileQueryParams;
    security: GetItvProfileSecurity;
}
export declare class GetItvProfileResponse extends SpeakeasyBase {
    contentType: string;
    getItvProfile200ApplicationJsonObject?: Map<string, any>;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
