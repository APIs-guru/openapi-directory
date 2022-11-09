import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateApplicationXAmzTargetEnum {
    KinesisAnalytics20150814CreateApplication = "KinesisAnalytics_20150814.CreateApplication"
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
    limitExceededException?: any;
    resourceInUseException?: any;
    statusCode: number;
    tooManyTagsException?: any;
}
