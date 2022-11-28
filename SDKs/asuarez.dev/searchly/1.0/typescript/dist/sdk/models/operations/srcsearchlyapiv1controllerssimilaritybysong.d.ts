import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SrcSearchlyApiV1ControllersSimilarityBySongQueryParams extends SpeakeasyBase {
    songId: number;
}
export declare class SrcSearchlyApiV1ControllersSimilarityBySongRequest extends SpeakeasyBase {
    queryParams: SrcSearchlyApiV1ControllersSimilarityBySongQueryParams;
}
export declare class SrcSearchlyApiV1ControllersSimilarityBySongResponse extends SpeakeasyBase {
    apiResponseSimilarity?: shared.ApiResponseSimilarity;
    contentType: string;
    statusCode: number;
    srcSearchlyApiV1ControllersSimilarityBySongDefaultApplicationTextString?: string;
}
