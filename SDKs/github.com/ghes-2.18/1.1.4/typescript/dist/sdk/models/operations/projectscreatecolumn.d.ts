import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectsCreateColumnPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class ProjectsCreateColumnRequestBody extends SpeakeasyBase {
    name: string;
}
export declare class ProjectsCreateColumnRequest extends SpeakeasyBase {
    pathParams: ProjectsCreateColumnPathParams;
    request?: ProjectsCreateColumnRequestBody;
}
export declare class ProjectsCreateColumnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    projectColumn?: shared.ProjectColumn;
    validationErrorSimple?: shared.ValidationErrorSimple;
}
