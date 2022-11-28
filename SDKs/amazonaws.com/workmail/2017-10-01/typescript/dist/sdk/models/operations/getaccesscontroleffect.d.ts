import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAccessControlEffectXAmzTargetEnum {
    WorkMailServiceGetAccessControlEffect = "WorkMailService.GetAccessControlEffect"
}
export declare class GetAccessControlEffectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAccessControlEffectXAmzTargetEnum;
}
export declare class GetAccessControlEffectRequest extends SpeakeasyBase {
    headers: GetAccessControlEffectHeaders;
    request: shared.GetAccessControlEffectRequest;
}
export declare class GetAccessControlEffectResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getAccessControlEffectResponse?: shared.GetAccessControlEffectResponse;
    invalidParameterException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
}
