import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectsGetPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class ProjectsGetRequest extends SpeakeasyBase {
    pathParams: ProjectsGetPathParams;
}
export declare class ProjectsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    project?: shared.Project;
}
