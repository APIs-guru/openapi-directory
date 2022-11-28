import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UsersGetContextForUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum UsersGetContextForUserSubjectTypeEnum {
    Organization = "organization",
    Repository = "repository",
    Issue = "issue",
    PullRequest = "pull_request"
}


export class UsersGetContextForUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subject_id" })
  subjectId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subject_type" })
  subjectType?: UsersGetContextForUserSubjectTypeEnum;
}


export class UsersGetContextForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersGetContextForUserPathParams;

  @SpeakeasyMetadata()
  queryParams: UsersGetContextForUserQueryParams;
}


export class UsersGetContextForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  hovercard?: shared.Hovercard;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
