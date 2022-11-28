import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateFleetMetadataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateFleetMetadataRequestBody extends SpeakeasyBase {
    displayName?: string;
    fleetArn: string;
    optimizeForEndUserLocation?: boolean;
}
export declare class UpdateFleetMetadataRequest extends SpeakeasyBase {
    headers: UpdateFleetMetadataHeaders;
    request: UpdateFleetMetadataRequestBody;
}
export declare class UpdateFleetMetadataResponse extends SpeakeasyBase {
    contentType: string;
    internalServerErrorException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
    updateFleetMetadataResponse?: Map<string, any>;
}
