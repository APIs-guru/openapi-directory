import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetFactQueryParams extends SpeakeasyBase {
    id?: string;
}
export declare class GetFactSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class GetFactRequest extends SpeakeasyBase {
    queryParams: GetFactQueryParams;
    security: GetFactSecurity;
}
export declare class GetFactResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
