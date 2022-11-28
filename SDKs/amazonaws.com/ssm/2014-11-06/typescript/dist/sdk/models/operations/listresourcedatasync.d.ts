import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListResourceDataSyncQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListResourceDataSyncXAmzTargetEnum {
    AmazonSsmListResourceDataSync = "AmazonSSM.ListResourceDataSync"
}
export declare class ListResourceDataSyncHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListResourceDataSyncXAmzTargetEnum;
}
export declare class ListResourceDataSyncRequest extends SpeakeasyBase {
    queryParams: ListResourceDataSyncQueryParams;
    headers: ListResourceDataSyncHeaders;
    request: shared.ListResourceDataSyncRequest;
}
export declare class ListResourceDataSyncResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidNextToken?: any;
    listResourceDataSyncResult?: shared.ListResourceDataSyncResult;
    resourceDataSyncInvalidConfigurationException?: any;
    statusCode: number;
}
