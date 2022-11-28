import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateLaunchProfilePathParams extends SpeakeasyBase {
    studioId: string;
}
export declare class CreateLaunchProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzClientToken?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateLaunchProfileRequestBodyStreamConfiguration extends SpeakeasyBase {
    clipboardMode?: shared.StreamingClipboardModeEnum;
    ec2InstanceTypes?: shared.StreamingInstanceTypeEnum[];
    maxSessionLengthInMinutes?: number;
    streamingImageIds?: string[];
}
export declare class CreateLaunchProfileRequestBody extends SpeakeasyBase {
    description?: string;
    ec2SubnetIds: string[];
    launchProfileProtocolVersions: string[];
    name: string;
    streamConfiguration: CreateLaunchProfileRequestBodyStreamConfiguration;
    studioComponentIds: string[];
    tags?: Map<string, string>;
}
export declare class CreateLaunchProfileRequest extends SpeakeasyBase {
    pathParams: CreateLaunchProfilePathParams;
    headers: CreateLaunchProfileHeaders;
    request: CreateLaunchProfileRequestBody;
}
export declare class CreateLaunchProfileResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createLaunchProfileResponse?: shared.CreateLaunchProfileResponse;
    internalServerErrorException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
