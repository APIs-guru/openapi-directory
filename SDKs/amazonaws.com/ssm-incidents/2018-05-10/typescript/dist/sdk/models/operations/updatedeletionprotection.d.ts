import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UpdateDeletionProtectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateDeletionProtectionRequestBody extends SpeakeasyBase {
    arn: string;
    clientToken?: string;
    deletionProtected: boolean;
}
export declare class UpdateDeletionProtectionRequest extends SpeakeasyBase {
    headers: UpdateDeletionProtectionHeaders;
    request: UpdateDeletionProtectionRequestBody;
}
export declare class UpdateDeletionProtectionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateDeletionProtectionOutput?: Map<string, any>;
    validationException?: any;
}
