import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum {
    Repositories = "repositories"
}


export class MigrationsStartForAuthenticatedUserRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exclude" })
  exclude?: MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum[];

  @SpeakeasyMetadata({ data: "json, name=exclude_attachments" })
  excludeAttachments?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lock_repositories" })
  lockRepositories?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repositories" })
  repositories: string[];
}


export class MigrationsStartForAuthenticatedUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: MigrationsStartForAuthenticatedUserRequestBody;
}


export class MigrationsStartForAuthenticatedUserResponse extends SpeakeasyBase {
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
