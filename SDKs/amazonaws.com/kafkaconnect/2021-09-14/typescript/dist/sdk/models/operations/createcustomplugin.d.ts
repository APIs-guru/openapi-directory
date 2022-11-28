import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateCustomPluginHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateCustomPluginRequestBodyContentTypeEnum {
    Jar = "JAR",
    Zip = "ZIP"
}
/**
 * Information about the location of a custom plugin.
**/
export declare class CreateCustomPluginRequestBodyLocation extends SpeakeasyBase {
    s3Location?: shared.S3Location;
}
export declare class CreateCustomPluginRequestBody extends SpeakeasyBase {
    contentType: CreateCustomPluginRequestBodyContentTypeEnum;
    description?: string;
    location: CreateCustomPluginRequestBodyLocation;
    name: string;
}
export declare class CreateCustomPluginRequest extends SpeakeasyBase {
    headers: CreateCustomPluginHeaders;
    request: CreateCustomPluginRequestBody;
}
export declare class CreateCustomPluginResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    createCustomPluginResponse?: shared.CreateCustomPluginResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
