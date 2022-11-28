import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchBiblioQueryParams extends SpeakeasyBase {
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
    searchBiblioInstitution?: string;
    searchBiblioOtherAuthors?: string;
    searchBiblioPrimaryAuthor?: string;
    searchBiblioPublication?: string;
    searchBiblioType?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchBiblioRequest extends SpeakeasyBase {
    queryParams: SearchBiblioQueryParams;
}
export declare class SearchBiblioResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
