import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateStudioHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzClientToken?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Configuration of the encryption method that is used for the studio.
**/
export declare class CreateStudioRequestBodyStudioEncryptionConfiguration extends SpeakeasyBase {
    keyArn?: string;
    keyType?: shared.StudioEncryptionConfigurationKeyTypeEnum;
}
export declare class CreateStudioRequestBody extends SpeakeasyBase {
    adminRoleArn: string;
    displayName: string;
    studioEncryptionConfiguration?: CreateStudioRequestBodyStudioEncryptionConfiguration;
    studioName: string;
    tags?: Map<string, string>;
    userRoleArn: string;
}
export declare class CreateStudioRequest extends SpeakeasyBase {
    headers: CreateStudioHeaders;
    request: CreateStudioRequestBody;
}
export declare class CreateStudioResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createStudioResponse?: shared.CreateStudioResponse;
    internalServerErrorException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
