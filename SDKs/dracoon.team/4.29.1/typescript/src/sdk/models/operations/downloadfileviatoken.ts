import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DownloadFileViaTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class DownloadFileViaTokenQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=generic_mimetype" })
  genericMimetype?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=inline" })
  inline?: boolean;
}


export class DownloadFileViaTokenHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Range" })
  range?: string;
}


export class DownloadFileViaTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DownloadFileViaTokenPathParams;

  @Metadata()
  queryParams: DownloadFileViaTokenQueryParams;

  @Metadata()
  headers: DownloadFileViaTokenHeaders;
}


export class DownloadFileViaTokenResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
