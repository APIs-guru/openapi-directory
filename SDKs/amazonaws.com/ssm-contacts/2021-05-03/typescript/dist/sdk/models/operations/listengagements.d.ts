import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListEngagementsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListEngagementsXAmzTargetEnum {
    SsmContactsListEngagements = "SSMContacts.ListEngagements"
}
export declare class ListEngagementsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListEngagementsXAmzTargetEnum;
}
export declare class ListEngagementsRequest extends SpeakeasyBase {
    queryParams: ListEngagementsQueryParams;
    headers: ListEngagementsHeaders;
    request: shared.ListEngagementsRequest;
}
export declare class ListEngagementsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listEngagementsResult?: shared.ListEngagementsResult;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
