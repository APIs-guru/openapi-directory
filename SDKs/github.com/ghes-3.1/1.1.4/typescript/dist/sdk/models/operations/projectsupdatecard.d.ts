import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectsUpdateCardPathParams extends SpeakeasyBase {
    cardId: number;
}
export declare class ProjectsUpdateCardRequestBody extends SpeakeasyBase {
    archived?: boolean;
    note?: string;
}
export declare class ProjectsUpdateCardRequest extends SpeakeasyBase {
    pathParams: ProjectsUpdateCardPathParams;
    request?: ProjectsUpdateCardRequestBody;
}
export declare class ProjectsUpdateCardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    projectCard?: shared.ProjectCard;
    validationErrorSimple?: shared.ValidationErrorSimple;
}
