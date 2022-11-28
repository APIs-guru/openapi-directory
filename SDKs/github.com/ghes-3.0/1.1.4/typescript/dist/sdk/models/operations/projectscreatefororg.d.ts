import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectsCreateForOrgPathParams extends SpeakeasyBase {
    org: string;
}
export declare class ProjectsCreateForOrgRequestBody extends SpeakeasyBase {
    body?: string;
    name: string;
}
export declare class ProjectsCreateForOrgRequest extends SpeakeasyBase {
    pathParams: ProjectsCreateForOrgPathParams;
    request?: ProjectsCreateForOrgRequestBody;
}
export declare class ProjectsCreateForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    project?: shared.Project;
    validationErrorSimple?: shared.ValidationErrorSimple;
}
