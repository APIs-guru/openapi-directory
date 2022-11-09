import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum {
    Repositories = "repositories"
}


export class MigrationsStartForAuthenticatedUserRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=exclude" })
  exclude?: MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum[];

  @Metadata({ data: "json, name=exclude_attachments" })
  excludeAttachments?: boolean;

  @Metadata({ data: "json, name=lock_repositories" })
  lockRepositories?: boolean;

  @Metadata({ data: "json, name=repositories" })
  repositories: string[];
}


export class MigrationsStartForAuthenticatedUserRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: MigrationsStartForAuthenticatedUserRequestBody;
}


export class MigrationsStartForAuthenticatedUserResponse extends SpeakeasyBase {
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
