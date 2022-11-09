import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateMailboxQuotaXAmzTargetEnum {
    WorkMailServiceUpdateMailboxQuota = "WorkMailService.UpdateMailboxQuota"
}
export declare class UpdateMailboxQuotaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateMailboxQuotaXAmzTargetEnum;
}
export declare class UpdateMailboxQuotaRequest extends SpeakeasyBase {
    headers: UpdateMailboxQuotaHeaders;
    request: shared.UpdateMailboxQuotaRequest;
}
export declare class UpdateMailboxQuotaResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    entityStateException?: any;
    invalidParameterException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
    updateMailboxQuotaResponse?: Map<string, any>;
}
