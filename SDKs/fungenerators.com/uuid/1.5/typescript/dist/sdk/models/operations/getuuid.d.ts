import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUuidQueryParams extends SpeakeasyBase {
    count?: number;
}
export declare class GetUuidSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class GetUuidRequest extends SpeakeasyBase {
    queryParams: GetUuidQueryParams;
    security: GetUuidSecurity;
}
export declare class GetUuidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
