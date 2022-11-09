import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DownloadZipArchiveViaTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class DownloadZipArchiveViaTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DownloadZipArchiveViaTokenPathParams;
}


export class DownloadZipArchiveViaTokenResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
