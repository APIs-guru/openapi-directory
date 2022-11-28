import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectsCreateCardPathParams extends SpeakeasyBase {
    columnId: number;
}
export declare class ProjectsCreateCardRequestBody1 extends SpeakeasyBase {
    note: string;
}
export declare class ProjectsCreateCardRequestBody2 extends SpeakeasyBase {
    contentId: number;
    contentType: string;
}
export declare class ProjectsCreateCard503ApplicationJsonErrors extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare class ProjectsCreateCard503ApplicationJson extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    errors?: ProjectsCreateCard503ApplicationJsonErrors[];
    message?: string;
}
export declare class ProjectsCreateCardRequest extends SpeakeasyBase {
    pathParams: ProjectsCreateCardPathParams;
    request?: any;
}
export declare class ProjectsCreateCardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    projectCard?: shared.ProjectCard;
    projectsCreateCard422ApplicationJsonOneOf?: any;
    projectsCreateCard503ApplicationJsonObject?: ProjectsCreateCard503ApplicationJson;
}
