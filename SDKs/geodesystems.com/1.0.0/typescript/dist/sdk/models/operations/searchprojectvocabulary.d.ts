import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchProjectVocabularyQueryParams extends SpeakeasyBase {
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
export declare class SearchProjectVocabularyRequest extends SpeakeasyBase {
    queryParams: SearchProjectVocabularyQueryParams;
}
export declare class SearchProjectVocabularyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
