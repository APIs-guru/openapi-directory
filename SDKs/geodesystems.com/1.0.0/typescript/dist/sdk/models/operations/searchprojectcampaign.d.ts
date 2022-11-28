import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchProjectCampaignQueryParams extends SpeakeasyBase {
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
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchProjectCampaignRequest extends SpeakeasyBase {
    queryParams: SearchProjectCampaignQueryParams;
}
export declare class SearchProjectCampaignResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
