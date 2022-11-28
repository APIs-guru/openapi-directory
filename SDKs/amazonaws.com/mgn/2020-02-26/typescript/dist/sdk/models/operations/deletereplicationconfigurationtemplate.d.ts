import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteReplicationConfigurationTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteReplicationConfigurationTemplateRequestBody extends SpeakeasyBase {
    replicationConfigurationTemplateId: string;
}
export declare class DeleteReplicationConfigurationTemplateRequest extends SpeakeasyBase {
    headers: DeleteReplicationConfigurationTemplateHeaders;
    request: DeleteReplicationConfigurationTemplateRequestBody;
}
export declare class DeleteReplicationConfigurationTemplateResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    deleteReplicationConfigurationTemplateResponse?: Map<string, any>;
    resourceNotFoundException?: any;
    statusCode: number;
    uninitializedAccountException?: any;
}
