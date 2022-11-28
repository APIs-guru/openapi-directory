import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DownloadFileViaTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class DownloadFileViaTokenQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=generic_mimetype" })
  genericMimetype?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inline" })
  inline?: boolean;
}


export class DownloadFileViaTokenHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Range" })
  range?: string;
}


export class DownloadFileViaTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DownloadFileViaTokenPathParams;

  @SpeakeasyMetadata()
  queryParams: DownloadFileViaTokenQueryParams;

  @SpeakeasyMetadata()
  headers: DownloadFileViaTokenHeaders;
}


export class DownloadFileViaTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
