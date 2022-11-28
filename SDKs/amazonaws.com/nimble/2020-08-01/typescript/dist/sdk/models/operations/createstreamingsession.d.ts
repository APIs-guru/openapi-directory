import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateStreamingSessionPathParams extends SpeakeasyBase {
    studioId: string;
}
export declare class CreateStreamingSessionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzClientToken?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateStreamingSessionRequestBodyEc2InstanceTypeEnum {
    G4dnXlarge = "g4dn.xlarge",
    G4dn2xlarge = "g4dn.2xlarge",
    G4dn4xlarge = "g4dn.4xlarge",
    G4dn8xlarge = "g4dn.8xlarge",
    G4dn12xlarge = "g4dn.12xlarge",
    G4dn16xlarge = "g4dn.16xlarge"
}
export declare class CreateStreamingSessionRequestBody extends SpeakeasyBase {
    ec2InstanceType?: CreateStreamingSessionRequestBodyEc2InstanceTypeEnum;
    launchProfileId?: string;
    ownedBy?: string;
    streamingImageId?: string;
    tags?: Map<string, string>;
}
export declare class CreateStreamingSessionRequest extends SpeakeasyBase {
    pathParams: CreateStreamingSessionPathParams;
    headers: CreateStreamingSessionHeaders;
    request: CreateStreamingSessionRequestBody;
}
export declare class CreateStreamingSessionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createStreamingSessionResponse?: shared.CreateStreamingSessionResponse;
    internalServerErrorException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
