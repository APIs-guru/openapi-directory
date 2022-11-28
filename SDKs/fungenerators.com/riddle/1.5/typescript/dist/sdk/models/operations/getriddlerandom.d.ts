import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRiddleRandomQueryParams extends SpeakeasyBase {
    category?: string;
}
export declare class GetRiddleRandomSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class GetRiddleRandomRequest extends SpeakeasyBase {
    queryParams: GetRiddleRandomQueryParams;
    security: GetRiddleRandomSecurity;
}
export declare class GetRiddleRandomResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
