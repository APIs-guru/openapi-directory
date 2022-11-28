import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectsDeletePathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class ProjectsDelete403ApplicationJson extends SpeakeasyBase {
    documentationUrl?: string;
    errors?: string[];
    message?: string;
}
export declare class ProjectsDeleteRequest extends SpeakeasyBase {
    pathParams: ProjectsDeletePathParams;
}
export declare class ProjectsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    projectsDelete403ApplicationJsonObject?: ProjectsDelete403ApplicationJson;
}
