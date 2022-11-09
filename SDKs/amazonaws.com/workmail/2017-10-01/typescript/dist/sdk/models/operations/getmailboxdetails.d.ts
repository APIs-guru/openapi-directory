import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetMailboxDetailsXAmzTargetEnum {
    WorkMailServiceGetMailboxDetails = "WorkMailService.GetMailboxDetails"
}
export declare class GetMailboxDetailsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMailboxDetailsXAmzTargetEnum;
}
export declare class GetMailboxDetailsRequest extends SpeakeasyBase {
    headers: GetMailboxDetailsHeaders;
    request: shared.GetMailboxDetailsRequest;
}
export declare class GetMailboxDetailsResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getMailboxDetailsResponse?: shared.GetMailboxDetailsResponse;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
}
