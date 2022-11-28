import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateReplicationSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateReplicationSetRequestBody extends SpeakeasyBase {
    actions: shared.UpdateReplicationSetAction[];
    arn: string;
    clientToken?: string;
}
export declare class UpdateReplicationSetRequest extends SpeakeasyBase {
    headers: UpdateReplicationSetHeaders;
    request: UpdateReplicationSetRequestBody;
}
export declare class UpdateReplicationSetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateReplicationSetOutput?: Map<string, any>;
    validationException?: any;
}
