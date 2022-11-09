import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MigrationsMapCommitAuthorPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=author_id" })
  authorId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class MigrationsMapCommitAuthorRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=remote_id" })
  remoteId?: string;
}


export class MigrationsMapCommitAuthorRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MigrationsMapCommitAuthorPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: MigrationsMapCommitAuthorRequestBody;
}


export class MigrationsMapCommitAuthorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  porterAuthor?: shared.PorterAuthor;

  @Metadata()
  validationError?: shared.ValidationError;
}
