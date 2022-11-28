import { SpeakeasyBase } from "../../../internal/utils";
export declare class BulkCreateOrUpdateAnnotationsPathParams extends SpeakeasyBase {
    commit: string;
    repoSlug: string;
    reportId: string;
    workspace: string;
}
export declare class BulkCreateOrUpdateAnnotationsRequest extends SpeakeasyBase {
    pathParams: BulkCreateOrUpdateAnnotationsPathParams;
    request: Map<string, any>[];
}
export declare class BulkCreateOrUpdateAnnotationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    reportAnnotations?: Map<string, any>[];
}
