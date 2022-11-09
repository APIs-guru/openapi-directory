import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateRelatedItemsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Details about the related item you're adding.
**/
export declare class UpdateRelatedItemsRequestBodyRelatedItemsUpdate extends SpeakeasyBase {
    itemToAdd?: shared.RelatedItem;
    itemToRemove?: shared.ItemIdentifier;
}
export declare class UpdateRelatedItemsRequestBody extends SpeakeasyBase {
    clientToken?: string;
    incidentRecordArn: string;
    relatedItemsUpdate: UpdateRelatedItemsRequestBodyRelatedItemsUpdate;
}
export declare class UpdateRelatedItemsRequest extends SpeakeasyBase {
    headers: UpdateRelatedItemsHeaders;
    request: UpdateRelatedItemsRequestBody;
}
export declare class UpdateRelatedItemsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateRelatedItemsOutput?: Map<string, any>;
    validationException?: any;
}
