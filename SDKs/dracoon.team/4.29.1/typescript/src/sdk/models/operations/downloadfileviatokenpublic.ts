import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DownloadFileViaTokenPublicPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=access_key" })
  accessKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class DownloadFileViaTokenPublicQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=generic_mimetype" })
  genericMimetype?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inline" })
  inline?: boolean;
}


export class DownloadFileViaTokenPublicHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Range" })
  range?: string;
}


export class DownloadFileViaTokenPublicRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DownloadFileViaTokenPublicPathParams;

  @SpeakeasyMetadata()
  queryParams: DownloadFileViaTokenPublicQueryParams;

  @SpeakeasyMetadata()
  headers: DownloadFileViaTokenPublicHeaders;
}


export class DownloadFileViaTokenPublicResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
