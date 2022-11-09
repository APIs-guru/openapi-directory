import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DownloadFile1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=file_id" })
  fileId: number;
}


export class DownloadFile1QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=generic_mimetype" })
  genericMimetype?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=inline" })
  inline?: boolean;
}


export class DownloadFile1Headers extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Range" })
  range?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class DownloadFile1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: DownloadFile1PathParams;

  @Metadata()
  queryParams: DownloadFile1QueryParams;

  @Metadata()
  headers: DownloadFile1Headers;
}


export class DownloadFile1Response extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
