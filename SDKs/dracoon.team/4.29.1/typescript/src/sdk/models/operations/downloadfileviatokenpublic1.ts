import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DownloadFileViaTokenPublic1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=access_key" })
  accessKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class DownloadFileViaTokenPublic1QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=generic_mimetype" })
  genericMimetype?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inline" })
  inline?: boolean;
}


export class DownloadFileViaTokenPublic1Headers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Range" })
  range?: string;
}


export class DownloadFileViaTokenPublic1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DownloadFileViaTokenPublic1PathParams;

  @SpeakeasyMetadata()
  queryParams: DownloadFileViaTokenPublic1QueryParams;

  @SpeakeasyMetadata()
  headers: DownloadFileViaTokenPublic1Headers;
}


export class DownloadFileViaTokenPublic1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
