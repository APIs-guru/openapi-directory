import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MigrationsDeleteArchiveForOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=migration_id" })
  migrationId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class MigrationsDeleteArchiveForOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MigrationsDeleteArchiveForOrgPathParams;
}


export class MigrationsDeleteArchiveForOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;
}
