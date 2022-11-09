import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DownloadFileViaTokenPublic1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=access_key" })
  accessKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class DownloadFileViaTokenPublic1QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=generic_mimetype" })
  genericMimetype?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=inline" })
  inline?: boolean;
}


export class DownloadFileViaTokenPublic1Headers extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Range" })
  range?: string;
}


export class DownloadFileViaTokenPublic1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: DownloadFileViaTokenPublic1PathParams;

  @Metadata()
  queryParams: DownloadFileViaTokenPublic1QueryParams;

  @Metadata()
  headers: DownloadFileViaTokenPublic1Headers;
}


export class DownloadFileViaTokenPublic1Response extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
