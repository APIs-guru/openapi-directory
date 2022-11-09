import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteReplicationSetQueryParams extends SpeakeasyBase {
    arn: string;
}
export declare class DeleteReplicationSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteReplicationSetRequest extends SpeakeasyBase {
    queryParams: DeleteReplicationSetQueryParams;
    headers: DeleteReplicationSetHeaders;
}
export declare class DeleteReplicationSetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteReplicationSetOutput?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
