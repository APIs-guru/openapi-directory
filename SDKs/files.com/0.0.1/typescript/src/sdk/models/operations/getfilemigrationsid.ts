import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFileMigrationsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetFileMigrationsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFileMigrationsIdPathParams;
}


export class GetFileMigrationsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fileMigrationEntity?: shared.FileMigrationEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
