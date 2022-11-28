import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DownloadFileViaToken1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class DownloadFileViaToken1QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=generic_mimetype" })
  genericMimetype?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inline" })
  inline?: boolean;
}


export class DownloadFileViaToken1Headers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Range" })
  range?: string;
}


export class DownloadFileViaToken1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DownloadFileViaToken1PathParams;

  @SpeakeasyMetadata()
  queryParams: DownloadFileViaToken1QueryParams;

  @SpeakeasyMetadata()
  headers: DownloadFileViaToken1Headers;
}


export class DownloadFileViaToken1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
