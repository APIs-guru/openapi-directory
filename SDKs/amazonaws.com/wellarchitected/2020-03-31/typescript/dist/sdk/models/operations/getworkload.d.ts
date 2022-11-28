import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorkloadPathParams extends SpeakeasyBase {
    workloadId: string;
}
export declare class GetWorkloadHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetWorkloadRequest extends SpeakeasyBase {
    pathParams: GetWorkloadPathParams;
    headers: GetWorkloadHeaders;
}
export declare class GetWorkloadResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getWorkloadOutput?: shared.GetWorkloadOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
