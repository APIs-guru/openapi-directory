import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MediaTabularExtractsheetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=arg1" })
  arg1?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entryid" })
  entryid: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=output" })
  output: string;
}


export class MediaTabularExtractsheetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: MediaTabularExtractsheetQueryParams;
}


export class MediaTabularExtractsheetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
