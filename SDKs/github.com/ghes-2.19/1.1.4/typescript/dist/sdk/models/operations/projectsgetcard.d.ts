import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectsGetCardPathParams extends SpeakeasyBase {
    cardId: number;
}
export declare class ProjectsGetCardRequest extends SpeakeasyBase {
    pathParams: ProjectsGetCardPathParams;
}
export declare class ProjectsGetCardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    projectCard?: shared.ProjectCard;
}
