import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposRemoveUserAccessRestrictionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposRemoveUserAccessRestrictionsRequestBody1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=users" })
  users: string[];
}


export class ReposRemoveUserAccessRestrictionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposRemoveUserAccessRestrictionsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class ReposRemoveUserAccessRestrictionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.SimpleUser })
  simpleUsers?: shared.SimpleUser[];

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
