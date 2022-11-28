import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposAddCollaboratorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum ReposAddCollaboratorRequestBodyPermissionEnum {
    Pull = "pull",
    Push = "push",
    Admin = "admin",
    Maintain = "maintain",
    Triage = "triage"
}


export class ReposAddCollaboratorRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: ReposAddCollaboratorRequestBodyPermissionEnum;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string;
}


export class ReposAddCollaboratorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposAddCollaboratorPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReposAddCollaboratorRequestBody;
}


export class ReposAddCollaboratorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  repositoryInvitation?: shared.RepositoryInvitation;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
