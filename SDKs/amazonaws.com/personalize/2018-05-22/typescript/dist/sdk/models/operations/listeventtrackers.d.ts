import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListEventTrackersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListEventTrackersXAmzTargetEnum {
    AmazonPersonalizeListEventTrackers = "AmazonPersonalize.ListEventTrackers"
}
export declare class ListEventTrackersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListEventTrackersXAmzTargetEnum;
}
export declare class ListEventTrackersRequest extends SpeakeasyBase {
    queryParams: ListEventTrackersQueryParams;
    headers: ListEventTrackersHeaders;
    request: shared.ListEventTrackersRequest;
}
export declare class ListEventTrackersResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    invalidNextTokenException?: any;
    listEventTrackersResponse?: shared.ListEventTrackersResponse;
    statusCode: number;
}
