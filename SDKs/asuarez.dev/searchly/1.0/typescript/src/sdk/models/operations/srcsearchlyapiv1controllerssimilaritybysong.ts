import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SrcSearchlyApiV1ControllersSimilarityBySongQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=song_id" })
  songId: number;
}


export class SrcSearchlyApiV1ControllersSimilarityBySongRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SrcSearchlyApiV1ControllersSimilarityBySongQueryParams;
}


export class SrcSearchlyApiV1ControllersSimilarityBySongResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiResponseSimilarity?: shared.ApiResponseSimilarity;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  srcSearchlyApiV1ControllersSimilarityBySongDefaultApplicationTextString?: string;
}
