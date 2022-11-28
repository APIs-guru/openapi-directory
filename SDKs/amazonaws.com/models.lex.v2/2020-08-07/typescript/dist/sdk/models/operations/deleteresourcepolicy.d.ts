import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteResourcePolicyPathParams extends SpeakeasyBase {
    resourceArn: string;
}
export declare class DeleteResourcePolicyQueryParams extends SpeakeasyBase {
    expectedRevisionId?: string;
}
export declare class DeleteResourcePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteResourcePolicyRequest extends SpeakeasyBase {
    pathParams: DeleteResourcePolicyPathParams;
    queryParams: DeleteResourcePolicyQueryParams;
    headers: DeleteResourcePolicyHeaders;
}
export declare class DeleteResourcePolicyResponse extends SpeakeasyBase {
    contentType: string;
    deleteResourcePolicyResponse?: shared.DeleteResourcePolicyResponse;
    internalServerException?: any;
    preconditionFailedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
