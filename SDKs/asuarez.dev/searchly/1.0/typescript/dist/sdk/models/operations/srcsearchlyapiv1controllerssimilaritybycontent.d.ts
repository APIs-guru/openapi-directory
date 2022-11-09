import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SrcSearchlyApiV1ControllersSimilarityByContentRequestBody extends SpeakeasyBase {
    content?: string;
}
export declare class SrcSearchlyApiV1ControllersSimilarityByContentRequest extends SpeakeasyBase {
    request: SrcSearchlyApiV1ControllersSimilarityByContentRequestBody;
}
export declare class SrcSearchlyApiV1ControllersSimilarityByContentResponse extends SpeakeasyBase {
    apiResponseSimilarity?: shared.ApiResponseSimilarity;
    contentType: string;
    statusCode: number;
    srcSearchlyApiV1ControllersSimilarityByContentDefaultApplicationTextString?: string;
}
