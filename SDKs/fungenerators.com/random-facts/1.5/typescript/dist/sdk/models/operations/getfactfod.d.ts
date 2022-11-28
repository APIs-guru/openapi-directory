import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFactFodQueryParams extends SpeakeasyBase {
    category?: string;
}
export declare class GetFactFodSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class GetFactFodRequest extends SpeakeasyBase {
    queryParams: GetFactFodQueryParams;
    security: GetFactFodSecurity;
}
export declare class GetFactFodResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
