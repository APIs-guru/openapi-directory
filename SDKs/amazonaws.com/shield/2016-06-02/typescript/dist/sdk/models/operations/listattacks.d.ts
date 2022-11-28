import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAttacksQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListAttacksXAmzTargetEnum {
    AwsShield20160616ListAttacks = "AWSShield_20160616.ListAttacks"
}
export declare class ListAttacksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAttacksXAmzTargetEnum;
}
export declare class ListAttacksRequest extends SpeakeasyBase {
    queryParams: ListAttacksQueryParams;
    headers: ListAttacksHeaders;
    request: shared.ListAttacksRequest;
}
export declare class ListAttacksResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidOperationException?: any;
    invalidParameterException?: any;
    listAttacksResponse?: shared.ListAttacksResponse;
    statusCode: number;
}
