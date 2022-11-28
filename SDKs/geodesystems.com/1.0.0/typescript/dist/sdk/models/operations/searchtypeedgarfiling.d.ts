import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchTypeEdgarFilingQueryParams extends SpeakeasyBase {
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
    searchTypeEdgarFilingCikNumber?: string;
    searchTypeEdgarFilingCompanyName?: string;
    searchTypeEdgarFilingFormType?: string;
    searchTypeEdgarFilingIrsNumber?: string;
    searchTypeEdgarFilingStandardIndustrialClassification?: string;
    searchTypeEdgarFilingState?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchTypeEdgarFilingRequest extends SpeakeasyBase {
    queryParams: SearchTypeEdgarFilingQueryParams;
}
export declare class SearchTypeEdgarFilingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
