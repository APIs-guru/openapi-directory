import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MigrationsGetLargeFilesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class MigrationsGetLargeFilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MigrationsGetLargeFilesPathParams;
}


export class MigrationsGetLargeFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.PorterLargeFile })
  porterLargeFiles?: shared.PorterLargeFile[];
}
