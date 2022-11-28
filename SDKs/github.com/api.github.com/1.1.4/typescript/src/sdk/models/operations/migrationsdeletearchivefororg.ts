import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MigrationsDeleteArchiveForOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=migration_id" })
  migrationId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class MigrationsDeleteArchiveForOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MigrationsDeleteArchiveForOrgPathParams;
}


export class MigrationsDeleteArchiveForOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;
}
