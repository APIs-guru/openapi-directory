import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectsListCollaboratorsPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare enum ProjectsListCollaboratorsAffiliationEnum {
    Outside = "outside",
    Direct = "direct",
    All = "all"
}
export declare class ProjectsListCollaboratorsQueryParams extends SpeakeasyBase {
    affiliation?: ProjectsListCollaboratorsAffiliationEnum;
    page?: number;
    perPage?: number;
}
export declare class ProjectsListCollaborators415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ProjectsListCollaboratorsRequest extends SpeakeasyBase {
    pathParams: ProjectsListCollaboratorsPathParams;
    queryParams: ProjectsListCollaboratorsQueryParams;
}
export declare class ProjectsListCollaboratorsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    projectsListCollaborators415ApplicationJsonObject?: ProjectsListCollaborators415ApplicationJson;
    simpleUsers?: shared.SimpleUser[];
    validationError?: shared.ValidationError;
}
