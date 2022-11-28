import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchTypePointAmerifluxLevel2QueryParams extends SpeakeasyBase {
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
    searchTypePointAmerifluxLevel2Contact?: string;
    searchTypePointAmerifluxLevel2EcosystemType?: string;
    searchTypePointAmerifluxLevel2SiteId?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchTypePointAmerifluxLevel2Request extends SpeakeasyBase {
    queryParams: SearchTypePointAmerifluxLevel2QueryParams;
}
export declare class SearchTypePointAmerifluxLevel2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
