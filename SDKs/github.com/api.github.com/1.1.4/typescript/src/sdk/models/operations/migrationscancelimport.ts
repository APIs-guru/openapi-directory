import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MigrationsCancelImportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class MigrationsCancelImportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MigrationsCancelImportPathParams;
}


export class MigrationsCancelImportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
