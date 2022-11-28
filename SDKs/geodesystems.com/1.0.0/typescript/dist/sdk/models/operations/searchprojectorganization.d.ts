import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchProjectOrganizationQueryParams extends SpeakeasyBase {
    changedateFrom?: Date;
    changedateTo?: Date;
    createdateFrom?: Date;
    createdateTo?: Date;
    description?: string;
    filesuffix?: string;
    fromdate?: Date;
    group?: string;
    max?: number;
    maxlatitude?: number;
    maxlongitude?: number;
    minlatitude?: number;
    minlongitude?: number;
    name?: string;
    searchProjectOrganizationOrganizationType?: string;
    searchProjectOrganizationStatus?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchProjectOrganizationRequest extends SpeakeasyBase {
    queryParams: SearchProjectOrganizationQueryParams;
}
export declare class SearchProjectOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
