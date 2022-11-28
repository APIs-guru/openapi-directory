import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DownloadFilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=file_id" })
  fileId: number;
}


export class DownloadFileQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=generic_mimetype" })
  genericMimetype?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inline" })
  inline?: boolean;
}


export class DownloadFileHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Range" })
  range?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class DownloadFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DownloadFilePathParams;

  @SpeakeasyMetadata()
  queryParams: DownloadFileQueryParams;

  @SpeakeasyMetadata()
  headers: DownloadFileHeaders;
}


export class DownloadFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
