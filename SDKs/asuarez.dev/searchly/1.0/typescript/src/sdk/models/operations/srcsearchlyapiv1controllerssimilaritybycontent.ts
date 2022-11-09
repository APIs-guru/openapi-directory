import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SrcSearchlyApiV1ControllersSimilarityByContentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;
}


export class SrcSearchlyApiV1ControllersSimilarityByContentRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: SrcSearchlyApiV1ControllersSimilarityByContentRequestBody;
}


export class SrcSearchlyApiV1ControllersSimilarityByContentResponse extends SpeakeasyBase {
  @Metadata()
  apiResponseSimilarity?: shared.ApiResponseSimilarity;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  srcSearchlyApiV1ControllersSimilarityByContentDefaultApplicationTextString?: string;
}
