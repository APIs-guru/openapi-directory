import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetResponsePlanQueryParams extends SpeakeasyBase {
    arn: string;
}
export declare class GetResponsePlanHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetResponsePlanRequest extends SpeakeasyBase {
    queryParams: GetResponsePlanQueryParams;
    headers: GetResponsePlanHeaders;
}
export declare class GetResponsePlanResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getResponsePlanOutput?: shared.GetResponsePlanOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
