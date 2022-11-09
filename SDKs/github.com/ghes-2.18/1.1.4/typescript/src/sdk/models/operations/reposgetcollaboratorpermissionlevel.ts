import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposGetCollaboratorPermissionLevelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class ReposGetCollaboratorPermissionLevelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposGetCollaboratorPermissionLevelPathParams;
}


export class ReposGetCollaboratorPermissionLevelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  repositoryCollaboratorPermission?: shared.RepositoryCollaboratorPermission;
}
