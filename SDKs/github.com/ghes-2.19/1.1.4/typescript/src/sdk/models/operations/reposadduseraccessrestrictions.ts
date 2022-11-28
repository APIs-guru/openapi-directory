import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposAddUserAccessRestrictionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposAddUserAccessRestrictionsRequestBody1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=users" })
  users: string[];
}


export class ReposAddUserAccessRestrictionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposAddUserAccessRestrictionsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class ReposAddUserAccessRestrictionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.SimpleUser })
  simpleUsers?: shared.SimpleUser[];

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
