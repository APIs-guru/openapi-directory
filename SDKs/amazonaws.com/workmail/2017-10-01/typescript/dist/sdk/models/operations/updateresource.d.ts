import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateResourceXAmzTargetEnum {
    WorkMailServiceUpdateResource = "WorkMailService.UpdateResource"
}
export declare class UpdateResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateResourceXAmzTargetEnum;
}
export declare class UpdateResourceRequest extends SpeakeasyBase {
    headers: UpdateResourceHeaders;
    request: shared.UpdateResourceRequest;
}
export declare class UpdateResourceResponse extends SpeakeasyBase {
    contentType: string;
    directoryUnavailableException?: any;
    emailAddressInUseException?: any;
    entityNotFoundException?: any;
    entityStateException?: any;
    invalidConfigurationException?: any;
    mailDomainNotFoundException?: any;
    mailDomainStateException?: any;
    nameAvailabilityException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
    updateResourceResponse?: Map<string, any>;
}
