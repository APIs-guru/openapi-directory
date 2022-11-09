import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetFactRandomQueryParams extends SpeakeasyBase {
    category?: string;
    subcategory?: string;
}
export declare class GetFactRandomSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class GetFactRandomRequest extends SpeakeasyBase {
    queryParams: GetFactRandomQueryParams;
    security: GetFactRandomSecurity;
}
export declare class GetFactRandomResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
