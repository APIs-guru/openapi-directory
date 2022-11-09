import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MediaTabularExtractsheetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=arg1" })
  arg1?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=entryid" })
  entryid: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=output" })
  output: string;
}


export class MediaTabularExtractsheetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: MediaTabularExtractsheetQueryParams;
}


export class MediaTabularExtractsheetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
