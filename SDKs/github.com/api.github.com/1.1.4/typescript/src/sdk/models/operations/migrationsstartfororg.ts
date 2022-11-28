import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MigrationsStartForOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class MigrationsStartForOrgRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exclude" })
  exclude?: string[];

  @SpeakeasyMetadata({ data: "json, name=exclude_attachments" })
  excludeAttachments?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lock_repositories" })
  lockRepositories?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repositories" })
  repositories: string[];
}


export class MigrationsStartForOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MigrationsStartForOrgPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: MigrationsStartForOrgRequestBody;
}


export class MigrationsStartForOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  migration?: shared.Migration;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
