import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DownloadZipArchiveViaTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class DownloadZipArchiveViaTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DownloadZipArchiveViaTokenPathParams;
}


export class DownloadZipArchiveViaTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
