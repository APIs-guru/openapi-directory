import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchProjectLearningResourceQueryParams extends SpeakeasyBase {
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
    searchProjectLearningResourceGradeLevel?: string;
    searchProjectLearningResourceTopic?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchProjectLearningResourceRequest extends SpeakeasyBase {
    queryParams: SearchProjectLearningResourceQueryParams;
}
export declare class SearchProjectLearningResourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
