import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectsRemoveCollaboratorPathParams extends SpeakeasyBase {
    projectId: number;
    username: string;
}
export declare class ProjectsRemoveCollaborator415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ProjectsRemoveCollaboratorRequest extends SpeakeasyBase {
    pathParams: ProjectsRemoveCollaboratorPathParams;
}
export declare class ProjectsRemoveCollaboratorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    projectsRemoveCollaborator415ApplicationJsonObject?: ProjectsRemoveCollaborator415ApplicationJson;
    validationError?: shared.ValidationError;
}
