import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchTypeDocumentPptQueryParams extends SpeakeasyBase {
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
export declare class SearchTypeDocumentPptRequest extends SpeakeasyBase {
    queryParams: SearchTypeDocumentPptQueryParams;
}
export declare class SearchTypeDocumentPptResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
