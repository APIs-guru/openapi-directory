import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreatePresignedDomainUrlXAmzTargetEnum {
    SageMakerCreatePresignedDomainUrl = "SageMaker.CreatePresignedDomainUrl"
}
export declare class CreatePresignedDomainUrlHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePresignedDomainUrlXAmzTargetEnum;
}
export declare class CreatePresignedDomainUrlRequest extends SpeakeasyBase {
    headers: CreatePresignedDomainUrlHeaders;
    request: shared.CreatePresignedDomainUrlRequest;
}
export declare class CreatePresignedDomainUrlResponse extends SpeakeasyBase {
    contentType: string;
    createPresignedDomainUrlResponse?: shared.CreatePresignedDomainUrlResponse;
    resourceNotFound?: any;
    statusCode: number;
}
