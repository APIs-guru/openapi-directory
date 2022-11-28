import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDomainXAmzTargetEnum {
    SageMakerCreateDomain = "SageMaker.CreateDomain"
}
export declare class CreateDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDomainXAmzTargetEnum;
}
export declare class CreateDomainRequest extends SpeakeasyBase {
    headers: CreateDomainHeaders;
    request: shared.CreateDomainRequest;
}
export declare class CreateDomainResponse extends SpeakeasyBase {
    contentType: string;
    createDomainResponse?: shared.CreateDomainResponse;
    resourceInUse?: any;
    resourceLimitExceeded?: any;
    statusCode: number;
}
