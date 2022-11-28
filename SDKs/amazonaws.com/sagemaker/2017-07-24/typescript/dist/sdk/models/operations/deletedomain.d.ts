import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteDomainXAmzTargetEnum {
    SageMakerDeleteDomain = "SageMaker.DeleteDomain"
}
export declare class DeleteDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDomainXAmzTargetEnum;
}
export declare class DeleteDomainRequest extends SpeakeasyBase {
    headers: DeleteDomainHeaders;
    request: shared.DeleteDomainRequest;
}
export declare class DeleteDomainResponse extends SpeakeasyBase {
    contentType: string;
    resourceInUse?: any;
    resourceNotFound?: any;
    statusCode: number;
}
