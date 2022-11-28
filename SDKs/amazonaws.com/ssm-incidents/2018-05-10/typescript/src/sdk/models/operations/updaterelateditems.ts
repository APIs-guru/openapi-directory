import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateRelatedItemsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// UpdateRelatedItemsRequestBodyRelatedItemsUpdate
/** 
 * Details about the related item you're adding.
**/
export class UpdateRelatedItemsRequestBodyRelatedItemsUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemToAdd" })
  itemToAdd?: shared.RelatedItem;

  @SpeakeasyMetadata({ data: "json, name=itemToRemove" })
  itemToRemove?: shared.ItemIdentifier;
}


export class UpdateRelatedItemsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=incidentRecordArn" })
  incidentRecordArn: string;

  @SpeakeasyMetadata({ data: "json, name=relatedItemsUpdate" })
  relatedItemsUpdate: UpdateRelatedItemsRequestBodyRelatedItemsUpdate;
}


export class UpdateRelatedItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateRelatedItemsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateRelatedItemsRequestBody;
}


export class UpdateRelatedItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateRelatedItemsOutput?: Map<string, any>;

  @SpeakeasyMetadata()
  validationException?: any;
}
