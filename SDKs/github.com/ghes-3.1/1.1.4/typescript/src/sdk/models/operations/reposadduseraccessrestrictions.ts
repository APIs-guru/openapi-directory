import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposAddUserAccessRestrictionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposAddUserAccessRestrictionsRequestBody1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=users" })
  users: string[];
}


export class ReposAddUserAccessRestrictionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposAddUserAccessRestrictionsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class ReposAddUserAccessRestrictionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.SimpleUser })
  simpleUsers?: shared.SimpleUser[];

  @Metadata()
  validationError?: shared.ValidationError;
}
