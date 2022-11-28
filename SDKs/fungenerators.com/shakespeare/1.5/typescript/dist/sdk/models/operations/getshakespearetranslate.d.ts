import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetShakespeareTranslateQueryParams extends SpeakeasyBase {
    text: string;
}
export declare class GetShakespeareTranslateSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class GetShakespeareTranslateRequest extends SpeakeasyBase {
    queryParams: GetShakespeareTranslateQueryParams;
    security: GetShakespeareTranslateSecurity;
}
export declare class GetShakespeareTranslateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
