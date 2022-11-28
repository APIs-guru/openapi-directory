import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetShakespeareGenerateInsultQueryParams extends SpeakeasyBase {
    limit?: number;
}
export declare class GetShakespeareGenerateInsultSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class GetShakespeareGenerateInsultRequest extends SpeakeasyBase {
    queryParams: GetShakespeareGenerateInsultQueryParams;
    security: GetShakespeareGenerateInsultSecurity;
}
export declare class GetShakespeareGenerateInsultResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
