import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetShakespeareGenerateNameQueryParams extends SpeakeasyBase {
    limit?: number;
    variation?: string;
}
export declare class GetShakespeareGenerateNameSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class GetShakespeareGenerateNameRequest extends SpeakeasyBase {
    queryParams: GetShakespeareGenerateNameQueryParams;
    security: GetShakespeareGenerateNameSecurity;
}
export declare class GetShakespeareGenerateNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
