import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListAllowedNodeTypeUpdatesXAmzTargetEnum {
    AmazonMemoryDbListAllowedNodeTypeUpdates = "AmazonMemoryDB.ListAllowedNodeTypeUpdates"
}
export declare class ListAllowedNodeTypeUpdatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAllowedNodeTypeUpdatesXAmzTargetEnum;
}
export declare class ListAllowedNodeTypeUpdatesRequest extends SpeakeasyBase {
    headers: ListAllowedNodeTypeUpdatesHeaders;
    request: shared.ListAllowedNodeTypeUpdatesRequest;
}
export declare class ListAllowedNodeTypeUpdatesResponse extends SpeakeasyBase {
    clusterNotFoundFault?: any;
    contentType: string;
    invalidParameterCombinationException?: any;
    invalidParameterValueException?: any;
    listAllowedNodeTypeUpdatesResponse?: shared.ListAllowedNodeTypeUpdatesResponse;
    serviceLinkedRoleNotFoundFault?: any;
    statusCode: number;
}
