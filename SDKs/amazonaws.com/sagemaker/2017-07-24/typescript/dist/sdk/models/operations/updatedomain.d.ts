import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateDomainXAmzTargetEnum {
    SageMakerUpdateDomain = "SageMaker.UpdateDomain"
}
export declare class UpdateDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDomainXAmzTargetEnum;
}
export declare class UpdateDomainRequest extends SpeakeasyBase {
    headers: UpdateDomainHeaders;
    request: shared.UpdateDomainRequest;
}
export declare class UpdateDomainResponse extends SpeakeasyBase {
    contentType: string;
    resourceInUse?: any;
    resourceLimitExceeded?: any;
    resourceNotFound?: any;
    statusCode: number;
    updateDomainResponse?: shared.UpdateDomainResponse;
}
