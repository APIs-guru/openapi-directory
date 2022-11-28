import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUuidVersionVersionPathParams extends SpeakeasyBase {
    version: number;
}
export declare class GetUuidVersionVersionQueryParams extends SpeakeasyBase {
    count?: number;
    text?: string;
    type?: string;
}
export declare class GetUuidVersionVersionSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class GetUuidVersionVersionRequest extends SpeakeasyBase {
    pathParams: GetUuidVersionVersionPathParams;
    queryParams: GetUuidVersionVersionQueryParams;
    security: GetUuidVersionVersionSecurity;
}
export declare class GetUuidVersionVersionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
