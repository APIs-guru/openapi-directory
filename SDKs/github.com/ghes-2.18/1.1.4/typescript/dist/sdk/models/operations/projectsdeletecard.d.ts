import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectsDeleteCardPathParams extends SpeakeasyBase {
    cardId: number;
}
export declare class ProjectsDeleteCard403ApplicationJson extends SpeakeasyBase {
    documentationUrl?: string;
    errors?: string[];
    message?: string;
}
export declare class ProjectsDeleteCardRequest extends SpeakeasyBase {
    pathParams: ProjectsDeleteCardPathParams;
}
export declare class ProjectsDeleteCardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    projectsDeleteCard403ApplicationJsonObject?: ProjectsDeleteCard403ApplicationJson;
}
