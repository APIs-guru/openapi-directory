import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteResourceXAmzTargetEnum {
    WorkMailServiceDeleteResource = "WorkMailService.DeleteResource"
}
export declare class DeleteResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteResourceXAmzTargetEnum;
}
export declare class DeleteResourceRequest extends SpeakeasyBase {
    headers: DeleteResourceHeaders;
    request: shared.DeleteResourceRequest;
}
export declare class DeleteResourceResponse extends SpeakeasyBase {
    contentType: string;
    deleteResourceResponse?: Map<string, any>;
    entityStateException?: any;
    invalidParameterException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
}
