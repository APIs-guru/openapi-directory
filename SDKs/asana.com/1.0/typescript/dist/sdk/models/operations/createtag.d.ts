import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateTagQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class CreateTagRequestBodyInput extends SpeakeasyBase {
    data?: shared.TagRequestInput;
}
export declare class CreateTag201ApplicationJson extends SpeakeasyBase {
    data?: shared.TagResponse;
}
export declare class CreateTagRequest extends SpeakeasyBase {
    queryParams: CreateTagQueryParams;
    request: CreateTagRequestBodyInput;
}
export declare class CreateTagResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    createTag201ApplicationJsonObject?: CreateTag201ApplicationJson;
}
