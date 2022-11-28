import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReposDownloadZipballArchivePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ref" })
  ref: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposDownloadZipballArchiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposDownloadZipballArchivePathParams;
}


export class ReposDownloadZipballArchiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
