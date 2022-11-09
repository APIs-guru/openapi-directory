import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetFactOnthisdayDiedQueryParams extends SpeakeasyBase {
    day?: string;
    month?: string;
}
export declare class GetFactOnthisdayDiedSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class GetFactOnthisdayDiedRequest extends SpeakeasyBase {
    queryParams: GetFactOnthisdayDiedQueryParams;
    security: GetFactOnthisdayDiedSecurity;
}
export declare class GetFactOnthisdayDiedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
