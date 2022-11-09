import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPirateGenerateInsultQueryParams extends SpeakeasyBase {
    limit?: number;
}
export declare class GetPirateGenerateInsultSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class GetPirateGenerateInsultRequest extends SpeakeasyBase {
    queryParams: GetPirateGenerateInsultQueryParams;
    security: GetPirateGenerateInsultSecurity;
}
export declare class GetPirateGenerateInsultResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
