import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SrcSearchlyApiV1ControllersSimilarityBySongQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=song_id" })
  songId: number;
}


export class SrcSearchlyApiV1ControllersSimilarityBySongRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SrcSearchlyApiV1ControllersSimilarityBySongQueryParams;
}


export class SrcSearchlyApiV1ControllersSimilarityBySongResponse extends SpeakeasyBase {
  @Metadata()
  apiResponseSimilarity?: shared.ApiResponseSimilarity;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  srcSearchlyApiV1ControllersSimilarityBySongDefaultApplicationTextString?: string;
}
