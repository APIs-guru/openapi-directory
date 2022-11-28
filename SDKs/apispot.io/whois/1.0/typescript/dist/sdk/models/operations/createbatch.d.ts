import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CreateBatchRequestBodyOperationEnum {
    Whois = "whois",
    Check = "check"
}
export declare enum CreateBatchRequestBodyOptionsFormatEnum {
    Raw = "raw",
    Formatted = "formatted",
    Json = "json"
}
export declare class CreateBatchRequestBodyOptions extends SpeakeasyBase {
    format?: CreateBatchRequestBodyOptionsFormatEnum;
}
export declare class CreateBatchRequestBody extends SpeakeasyBase {
    domains: string[];
    operation: CreateBatchRequestBodyOperationEnum;
    options?: CreateBatchRequestBodyOptions;
}
export declare class CreateBatchRequest extends SpeakeasyBase {
    request: CreateBatchRequestBody;
}
export declare class CreateBatchResponse extends SpeakeasyBase {
    batch?: any;
    contentType: string;
    statusCode: number;
}
