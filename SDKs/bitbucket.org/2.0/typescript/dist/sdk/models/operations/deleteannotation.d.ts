import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteAnnotationPathParams extends SpeakeasyBase {
    annotationId: string;
    commit: string;
    repoSlug: string;
    reportId: string;
    workspace: string;
}
export declare class DeleteAnnotationRequest extends SpeakeasyBase {
    pathParams: DeleteAnnotationPathParams;
}
export declare class DeleteAnnotationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
