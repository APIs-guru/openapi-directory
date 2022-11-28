import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BinLookupPathParams extends SpeakeasyBase {
    bin: string;
}
export declare class BinLookupQueryParams extends SpeakeasyBase {
    apiKey: string;
}
export declare class BinLookupRequest extends SpeakeasyBase {
    pathParams: BinLookupPathParams;
    queryParams: BinLookupQueryParams;
}
export declare class BinLookupResponse extends SpeakeasyBase {
    contentType: string;
    responseItems?: shared.ResponseItem[];
    statusCode: number;
}
