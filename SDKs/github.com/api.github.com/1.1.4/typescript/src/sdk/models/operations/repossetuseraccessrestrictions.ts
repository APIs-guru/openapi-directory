import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposSetUserAccessRestrictionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposSetUserAccessRestrictionsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=users" })
  users: string[];
}


export class ReposSetUserAccessRestrictionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposSetUserAccessRestrictionsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposSetUserAccessRestrictionsRequestBody;
}


export class ReposSetUserAccessRestrictionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.SimpleUser })
  simpleUsers?: shared.SimpleUser[];

  @Metadata()
  validationError?: shared.ValidationError;
}
