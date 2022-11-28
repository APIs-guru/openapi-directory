import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposListCollaboratorsPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare enum ReposListCollaboratorsAffiliationEnum {
    Outside = "outside",
    Direct = "direct",
    All = "all"
}
export declare class ReposListCollaboratorsQueryParams extends SpeakeasyBase {
    affiliation?: ReposListCollaboratorsAffiliationEnum;
    page?: number;
    perPage?: number;
}
export declare class ReposListCollaboratorsRequest extends SpeakeasyBase {
    pathParams: ReposListCollaboratorsPathParams;
    queryParams: ReposListCollaboratorsQueryParams;
}
export declare class ReposListCollaboratorsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    collaborators?: shared.Collaborator[];
}
