import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MigrationsCancelImportPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class MigrationsCancelImportRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MigrationsCancelImportPathParams;
}


export class MigrationsCancelImportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
