import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DownloadFileViaTokenPublicPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=access_key" })
  accessKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class DownloadFileViaTokenPublicQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=generic_mimetype" })
  genericMimetype?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=inline" })
  inline?: boolean;
}


export class DownloadFileViaTokenPublicHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Range" })
  range?: string;
}


export class DownloadFileViaTokenPublicRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DownloadFileViaTokenPublicPathParams;

  @Metadata()
  queryParams: DownloadFileViaTokenPublicQueryParams;

  @Metadata()
  headers: DownloadFileViaTokenPublicHeaders;
}


export class DownloadFileViaTokenPublicResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
