import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProjectsRemoveCollaboratorPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class ProjectsRemoveCollaboratorRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProjectsRemoveCollaboratorPathParams;
}


export class ProjectsRemoveCollaborator415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class ProjectsRemoveCollaboratorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  projectsRemoveCollaborator415ApplicationJsonObject?: ProjectsRemoveCollaborator415ApplicationJson;

  @Metadata()
  validationError?: shared.ValidationError;
}
