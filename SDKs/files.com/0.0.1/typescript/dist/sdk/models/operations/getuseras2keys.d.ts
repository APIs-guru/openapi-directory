import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserAs2KeysQueryParams extends SpeakeasyBase {
    cursor?: string;
    perPage?: number;
    userId?: number;
}
export declare class GetUserAs2KeysRequest extends SpeakeasyBase {
    queryParams: GetUserAs2KeysQueryParams;
}
export declare class GetUserAs2KeysResponse extends SpeakeasyBase {
    as2KeyEntities?: shared.As2KeyEntity[];
    contentType: string;
    statusCode: number;
}
