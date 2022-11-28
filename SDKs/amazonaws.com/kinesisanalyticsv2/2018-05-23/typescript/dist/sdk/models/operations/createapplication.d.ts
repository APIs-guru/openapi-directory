import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateApplicationXAmzTargetEnum {
    KinesisAnalytics20180523CreateApplication = "KinesisAnalytics_20180523.CreateApplication"
}
export declare class CreateApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateApplicationXAmzTargetEnum;
}
export declare class CreateApplicationRequest extends SpeakeasyBase {
    headers: CreateApplicationHeaders;
    request: shared.CreateApplicationRequest;
}
export declare class CreateApplicationResponse extends SpeakeasyBase {
    codeValidationException?: any;
    concurrentModificationException?: any;
    contentType: string;
    createApplicationResponse?: shared.CreateApplicationResponse;
    invalidArgumentException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceInUseException?: any;
    statusCode: number;
    tooManyTagsException?: any;
}
