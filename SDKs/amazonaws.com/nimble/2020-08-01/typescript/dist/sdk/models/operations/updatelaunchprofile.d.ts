import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateLaunchProfilePathParams extends SpeakeasyBase {
    launchProfileId: string;
    studioId: string;
}
export declare class UpdateLaunchProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzClientToken?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateLaunchProfileRequestBodyStreamConfiguration extends SpeakeasyBase {
    clipboardMode?: shared.StreamingClipboardModeEnum;
    ec2InstanceTypes?: shared.StreamingInstanceTypeEnum[];
    maxSessionLengthInMinutes?: number;
    streamingImageIds?: string[];
}
export declare class UpdateLaunchProfileRequestBody extends SpeakeasyBase {
    description?: string;
    launchProfileProtocolVersions?: string[];
    name?: string;
    streamConfiguration?: UpdateLaunchProfileRequestBodyStreamConfiguration;
    studioComponentIds?: string[];
}
export declare class UpdateLaunchProfileRequest extends SpeakeasyBase {
    pathParams: UpdateLaunchProfilePathParams;
    headers: UpdateLaunchProfileHeaders;
    request: UpdateLaunchProfileRequestBody;
}
export declare class UpdateLaunchProfileResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerErrorException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    updateLaunchProfileResponse?: shared.UpdateLaunchProfileResponse;
    validationException?: any;
}
