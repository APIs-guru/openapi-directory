import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectsUpdateColumnPathParams extends SpeakeasyBase {
    columnId: number;
}
export declare class ProjectsUpdateColumnRequestBody extends SpeakeasyBase {
    name: string;
}
export declare class ProjectsUpdateColumnRequest extends SpeakeasyBase {
    pathParams: ProjectsUpdateColumnPathParams;
    request?: ProjectsUpdateColumnRequestBody;
}
export declare class ProjectsUpdateColumnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    projectColumn?: shared.ProjectColumn;
}
