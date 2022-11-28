import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProjectsRemoveCollaboratorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class ProjectsRemoveCollaborator415ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class ProjectsRemoveCollaboratorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProjectsRemoveCollaboratorPathParams;
}


export class ProjectsRemoveCollaboratorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  projectsRemoveCollaborator415ApplicationJsonObject?: ProjectsRemoveCollaborator415ApplicationJson;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
