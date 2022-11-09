import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposRemoveUserAccessRestrictionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposRemoveUserAccessRestrictionsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=users" })
  users: string[];
}


export class ReposRemoveUserAccessRestrictionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposRemoveUserAccessRestrictionsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposRemoveUserAccessRestrictionsRequestBody;
}


export class ReposRemoveUserAccessRestrictionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.SimpleUser })
  simpleUsers?: shared.SimpleUser[];

  @Metadata()
  validationError?: shared.ValidationError;
}
