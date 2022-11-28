import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SrcSearchlyApiV1ControllersSongSearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class SrcSearchlyApiV1ControllersSongSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SrcSearchlyApiV1ControllersSongSearchQueryParams;
}


export class SrcSearchlyApiV1ControllersSongSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiResponseSong?: shared.ApiResponseSong;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  srcSearchlyApiV1ControllersSongSearchDefaultApplicationTextString?: string;
}
