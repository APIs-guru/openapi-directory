import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPirateTranslateQueryParams extends SpeakeasyBase {
    text: string;
}
export declare class GetPirateTranslateSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class GetPirateTranslateRequest extends SpeakeasyBase {
    queryParams: GetPirateTranslateQueryParams;
    security: GetPirateTranslateSecurity;
}
export declare class GetPirateTranslateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
