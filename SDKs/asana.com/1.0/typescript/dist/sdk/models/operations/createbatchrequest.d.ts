import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateBatchRequestQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class CreateBatchRequestRequestBody extends SpeakeasyBase {
    data?: shared.BatchRequest;
}
export declare class CreateBatchRequest200ApplicationJson extends SpeakeasyBase {
    data?: shared.BatchResponse[];
}
export declare class CreateBatchRequestRequest extends SpeakeasyBase {
    queryParams: CreateBatchRequestQueryParams;
    request: CreateBatchRequestRequestBody;
}
export declare class CreateBatchRequestResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    createBatchRequest200ApplicationJsonObject?: CreateBatchRequest200ApplicationJson;
}
