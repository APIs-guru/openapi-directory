import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MigrationsDownloadArchiveForOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=migration_id" })
  migrationId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class MigrationsDownloadArchiveForOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MigrationsDownloadArchiveForOrgPathParams;
}


export class MigrationsDownloadArchiveForOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;
}
