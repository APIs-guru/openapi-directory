import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReposDownloadZipballArchivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ref" })
  ref: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposDownloadZipballArchiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposDownloadZipballArchivePathParams;
}


export class ReposDownloadZipballArchiveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
