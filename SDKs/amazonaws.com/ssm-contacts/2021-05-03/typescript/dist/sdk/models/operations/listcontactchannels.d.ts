import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListContactChannelsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListContactChannelsXAmzTargetEnum {
    SsmContactsListContactChannels = "SSMContacts.ListContactChannels"
}
export declare class ListContactChannelsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListContactChannelsXAmzTargetEnum;
}
export declare class ListContactChannelsRequest extends SpeakeasyBase {
    queryParams: ListContactChannelsQueryParams;
    headers: ListContactChannelsHeaders;
    request: shared.ListContactChannelsRequest;
}
export declare class ListContactChannelsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    dataEncryptionException?: any;
    internalServerException?: any;
    listContactChannelsResult?: shared.ListContactChannelsResult;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
