import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchCommunityResourceQueryParams extends SpeakeasyBase {
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
    searchCommunityResourceAddress?: string;
    searchCommunityResourceCity?: string;
    searchCommunityResourceResourceType?: string;
    searchCommunityResourceState?: string;
    searchCommunityResourceZipcode?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchCommunityResourceRequest extends SpeakeasyBase {
    queryParams: SearchCommunityResourceQueryParams;
}
export declare class SearchCommunityResourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
