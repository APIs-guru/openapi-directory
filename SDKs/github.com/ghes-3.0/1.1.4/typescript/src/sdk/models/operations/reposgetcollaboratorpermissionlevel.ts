import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposGetCollaboratorPermissionLevelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class ReposGetCollaboratorPermissionLevelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposGetCollaboratorPermissionLevelPathParams;
}


export class ReposGetCollaboratorPermissionLevelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  repositoryCollaboratorPermission?: shared.RepositoryCollaboratorPermission;
}
