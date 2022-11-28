import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteResourcePolicyStatementPathParams extends SpeakeasyBase {
    resourceArn: string;
    statementId: string;
}
export declare class DeleteResourcePolicyStatementQueryParams extends SpeakeasyBase {
    expectedRevisionId?: string;
}
export declare class DeleteResourcePolicyStatementHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteResourcePolicyStatementRequest extends SpeakeasyBase {
    pathParams: DeleteResourcePolicyStatementPathParams;
    queryParams: DeleteResourcePolicyStatementQueryParams;
    headers: DeleteResourcePolicyStatementHeaders;
}
export declare class DeleteResourcePolicyStatementResponse extends SpeakeasyBase {
    contentType: string;
    deleteResourcePolicyStatementResponse?: shared.DeleteResourcePolicyStatementResponse;
    internalServerException?: any;
    preconditionFailedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
