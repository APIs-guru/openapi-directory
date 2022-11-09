import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetFactOnthisdayBornQueryParams extends SpeakeasyBase {
    day?: string;
    month?: string;
}
export declare class GetFactOnthisdayBornSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class GetFactOnthisdayBornRequest extends SpeakeasyBase {
    queryParams: GetFactOnthisdayBornQueryParams;
    security: GetFactOnthisdayBornSecurity;
}
export declare class GetFactOnthisdayBornResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
