import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPirateGenerateNameQueryParams extends SpeakeasyBase {
    limit?: number;
    variation?: string;
}
export declare class GetPirateGenerateNameSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class GetPirateGenerateNameRequest extends SpeakeasyBase {
    queryParams: GetPirateGenerateNameQueryParams;
    security: GetPirateGenerateNameSecurity;
}
export declare class GetPirateGenerateNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
