import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchBioOntologyPersonQueryParams extends SpeakeasyBase {
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
    searchBioOntologyPersonGender?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchBioOntologyPersonRequest extends SpeakeasyBase {
    queryParams: SearchBioOntologyPersonQueryParams;
}
export declare class SearchBioOntologyPersonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
