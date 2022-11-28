import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListingsOnePathParams extends SpeakeasyBase {
    ecosystemId: string;
    id: string;
}
export declare class ListingsOneRequest extends SpeakeasyBase {
    pathParams: ListingsOnePathParams;
}
export declare class ListingsOneResponse extends SpeakeasyBase {
    contentType: string;
    getListingResponse?: shared.GetListingResponse;
    statusCode: number;
}
