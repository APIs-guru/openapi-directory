import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAnnotationPathParams extends SpeakeasyBase {
    annotationId: string;
    commit: string;
    repoSlug: string;
    reportId: string;
    workspace: string;
}
export declare class GetAnnotationRequest extends SpeakeasyBase {
    pathParams: GetAnnotationPathParams;
}
export declare class GetAnnotationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    reportAnnotation?: Map<string, any>;
}
