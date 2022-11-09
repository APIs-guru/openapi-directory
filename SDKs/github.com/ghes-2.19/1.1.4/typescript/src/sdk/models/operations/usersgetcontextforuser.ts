import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UsersGetContextForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum UsersGetContextForUserSubjectTypeEnum {
    Organization = "organization"
,    Repository = "repository"
,    Issue = "issue"
,    PullRequest = "pull_request"
}


export class UsersGetContextForUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=subject_id" })
  subjectId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=subject_type" })
  subjectType?: UsersGetContextForUserSubjectTypeEnum;
}


export class UsersGetContextForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UsersGetContextForUserPathParams;

  @Metadata()
  queryParams: UsersGetContextForUserQueryParams;
}


export class UsersGetContextForUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  hovercard?: shared.Hovercard;

  @Metadata()
  validationError?: shared.ValidationError;
}
