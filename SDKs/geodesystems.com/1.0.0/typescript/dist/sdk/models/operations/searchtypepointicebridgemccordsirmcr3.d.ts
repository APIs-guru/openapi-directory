import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchTypePointIcebridgeMccordsIrmcr3QueryParams extends SpeakeasyBase {
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
export declare class SearchTypePointIcebridgeMccordsIrmcr3Request extends SpeakeasyBase {
    queryParams: SearchTypePointIcebridgeMccordsIrmcr3QueryParams;
}
export declare class SearchTypePointIcebridgeMccordsIrmcr3Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
