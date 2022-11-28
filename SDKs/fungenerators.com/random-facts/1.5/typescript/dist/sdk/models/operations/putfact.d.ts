import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutFactQueryParams extends SpeakeasyBase {
    category: string;
    fact: string;
    subcategory: string;
    tags: string;
}
export declare class PutFactSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class PutFactRequest extends SpeakeasyBase {
    queryParams: PutFactQueryParams;
    security: PutFactSecurity;
}
export declare class PutFactResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
