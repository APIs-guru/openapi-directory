import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DownloadFileViaToken1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class DownloadFileViaToken1QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=generic_mimetype" })
  genericMimetype?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=inline" })
  inline?: boolean;
}


export class DownloadFileViaToken1Headers extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Range" })
  range?: string;
}


export class DownloadFileViaToken1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: DownloadFileViaToken1PathParams;

  @Metadata()
  queryParams: DownloadFileViaToken1QueryParams;

  @Metadata()
  headers: DownloadFileViaToken1Headers;
}


export class DownloadFileViaToken1Response extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
