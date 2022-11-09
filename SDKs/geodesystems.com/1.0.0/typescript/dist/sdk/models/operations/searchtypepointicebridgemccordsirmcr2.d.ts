import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchTypePointIcebridgeMccordsIrmcr2QueryParams extends SpeakeasyBase {
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
export declare class SearchTypePointIcebridgeMccordsIrmcr2Request extends SpeakeasyBase {
    queryParams: SearchTypePointIcebridgeMccordsIrmcr2QueryParams;
}
export declare class SearchTypePointIcebridgeMccordsIrmcr2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
