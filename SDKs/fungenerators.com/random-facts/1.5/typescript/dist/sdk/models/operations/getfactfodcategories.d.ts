import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetFactFodCategoriesSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class GetFactFodCategoriesRequest extends SpeakeasyBase {
    security: GetFactFodCategoriesSecurity;
}
export declare class GetFactFodCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
