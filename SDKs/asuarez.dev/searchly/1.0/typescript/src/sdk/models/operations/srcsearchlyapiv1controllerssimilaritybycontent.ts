import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SrcSearchlyApiV1ControllersSimilarityByContentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;
}


export class SrcSearchlyApiV1ControllersSimilarityByContentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: SrcSearchlyApiV1ControllersSimilarityByContentRequestBody;
}


export class SrcSearchlyApiV1ControllersSimilarityByContentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiResponseSimilarity?: shared.ApiResponseSimilarity;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  srcSearchlyApiV1ControllersSimilarityByContentDefaultApplicationTextString?: string;
}
