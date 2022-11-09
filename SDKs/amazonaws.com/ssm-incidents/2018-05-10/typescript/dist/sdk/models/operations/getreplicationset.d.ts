import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetReplicationSetQueryParams extends SpeakeasyBase {
    arn: string;
}
export declare class GetReplicationSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetReplicationSetRequest extends SpeakeasyBase {
    queryParams: GetReplicationSetQueryParams;
    headers: GetReplicationSetHeaders;
}
export declare class GetReplicationSetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getReplicationSetOutput?: shared.GetReplicationSetOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
