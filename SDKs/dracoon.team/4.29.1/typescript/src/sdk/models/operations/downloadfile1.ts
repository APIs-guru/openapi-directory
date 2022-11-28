import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DownloadFile1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=file_id" })
  fileId: number;
}


export class DownloadFile1QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=generic_mimetype" })
  genericMimetype?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inline" })
  inline?: boolean;
}


export class DownloadFile1Headers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Range" })
  range?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class DownloadFile1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DownloadFile1PathParams;

  @SpeakeasyMetadata()
  queryParams: DownloadFile1QueryParams;

  @SpeakeasyMetadata()
  headers: DownloadFile1Headers;
}


export class DownloadFile1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
