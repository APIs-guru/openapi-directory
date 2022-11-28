import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFactNumbersQueryParams extends SpeakeasyBase {
    number: number;
}
export declare class GetFactNumbersSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class GetFactNumbersRequest extends SpeakeasyBase {
    queryParams: GetFactNumbersQueryParams;
    security: GetFactNumbersSecurity;
}
export declare class GetFactNumbersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
