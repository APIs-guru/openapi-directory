import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MigrationsStartForOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class MigrationsStartForOrgRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=exclude" })
  exclude?: string[];

  @Metadata({ data: "json, name=exclude_attachments" })
  excludeAttachments?: boolean;

  @Metadata({ data: "json, name=lock_repositories" })
  lockRepositories?: boolean;

  @Metadata({ data: "json, name=repositories" })
  repositories: string[];
}


export class MigrationsStartForOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MigrationsStartForOrgPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: MigrationsStartForOrgRequestBody;
}


export class MigrationsStartForOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  migration?: shared.Migration;

  @Metadata()
  validationError?: shared.ValidationError;
}
