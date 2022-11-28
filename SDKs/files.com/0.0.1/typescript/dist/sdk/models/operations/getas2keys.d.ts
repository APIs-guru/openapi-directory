import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAs2KeysQueryParams extends SpeakeasyBase {
    cursor?: string;
    perPage?: number;
    userId?: number;
}
export declare class GetAs2KeysRequest extends SpeakeasyBase {
    queryParams: GetAs2KeysQueryParams;
}
export declare class GetAs2KeysResponse extends SpeakeasyBase {
    as2KeyEntities?: shared.As2KeyEntity[];
    contentType: string;
    statusCode: number;
}
