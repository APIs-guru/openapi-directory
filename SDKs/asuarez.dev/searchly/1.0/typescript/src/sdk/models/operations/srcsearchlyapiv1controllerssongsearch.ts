import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SrcSearchlyApiV1ControllersSongSearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class SrcSearchlyApiV1ControllersSongSearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SrcSearchlyApiV1ControllersSongSearchQueryParams;
}


export class SrcSearchlyApiV1ControllersSongSearchResponse extends SpeakeasyBase {
  @Metadata()
  apiResponseSong?: shared.ApiResponseSong;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  srcSearchlyApiV1ControllersSongSearchDefaultApplicationTextString?: string;
}
