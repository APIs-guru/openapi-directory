import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MigrationsMapCommitAuthorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=author_id" })
  authorId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class MigrationsMapCommitAuthorRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=remote_id" })
  remoteId?: string;
}


export class MigrationsMapCommitAuthorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MigrationsMapCommitAuthorPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: MigrationsMapCommitAuthorRequestBody;
}


export class MigrationsMapCommitAuthorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  porterAuthor?: shared.PorterAuthor;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
