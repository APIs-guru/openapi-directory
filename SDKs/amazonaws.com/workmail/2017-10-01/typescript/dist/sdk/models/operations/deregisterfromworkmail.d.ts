import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeregisterFromWorkMailXAmzTargetEnum {
    WorkMailServiceDeregisterFromWorkMail = "WorkMailService.DeregisterFromWorkMail"
}
export declare class DeregisterFromWorkMailHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterFromWorkMailXAmzTargetEnum;
}
export declare class DeregisterFromWorkMailRequest extends SpeakeasyBase {
    headers: DeregisterFromWorkMailHeaders;
    request: shared.DeregisterFromWorkMailRequest;
}
export declare class DeregisterFromWorkMailResponse extends SpeakeasyBase {
    contentType: string;
    deregisterFromWorkMailResponse?: Map<string, any>;
    entityNotFoundException?: any;
    entityStateException?: any;
    invalidParameterException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
}
