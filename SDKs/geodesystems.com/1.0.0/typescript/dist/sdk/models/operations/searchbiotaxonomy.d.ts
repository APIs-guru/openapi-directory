import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchBioTaxonomyQueryParams extends SpeakeasyBase {
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
    searchBioTaxonomyAliases?: string;
    searchBioTaxonomyDivision?: string;
    searchBioTaxonomyEmblCode?: string;
    searchBioTaxonomyInheritedDiv?: boolean;
    searchBioTaxonomyRank?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchBioTaxonomyRequest extends SpeakeasyBase {
    queryParams: SearchBioTaxonomyQueryParams;
}
export declare class SearchBioTaxonomyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
