import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReposDownloadTarballArchivePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ref" })
  ref: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposDownloadTarballArchiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposDownloadTarballArchivePathParams;
}


export class ReposDownloadTarballArchiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
