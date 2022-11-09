import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFileMigrationsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetFileMigrationsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFileMigrationsIdPathParams;
}


export class GetFileMigrationsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fileMigrationEntity?: shared.FileMigrationEntity;

  @Metadata()
  statusCode: number;
}
