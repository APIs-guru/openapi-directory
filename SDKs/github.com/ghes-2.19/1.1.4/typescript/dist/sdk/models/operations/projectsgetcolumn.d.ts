import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectsGetColumnPathParams extends SpeakeasyBase {
    columnId: number;
}
export declare class ProjectsGetColumnRequest extends SpeakeasyBase {
    pathParams: ProjectsGetColumnPathParams;
}
export declare class ProjectsGetColumnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    projectColumn?: shared.ProjectColumn;
}
