import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MigrationsGetLargeFilesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class MigrationsGetLargeFilesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MigrationsGetLargeFilesPathParams;
}


export class MigrationsGetLargeFilesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.PorterLargeFile })
  porterLargeFiles?: shared.PorterLargeFile[];
}
