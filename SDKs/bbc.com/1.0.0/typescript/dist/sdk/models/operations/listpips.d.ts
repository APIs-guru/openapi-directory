import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPipsQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
    q?: string;
}
export declare class ListPipsRequest extends SpeakeasyBase {
    queryParams: ListPipsQueryParams;
}
export declare class ListPipsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    nitro?: any;
}
