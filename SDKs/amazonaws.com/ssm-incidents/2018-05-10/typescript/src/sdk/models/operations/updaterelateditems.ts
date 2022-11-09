import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateRelatedItemsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// UpdateRelatedItemsRequestBodyRelatedItemsUpdate
/** 
 * Details about the related item you're adding.
**/
export class UpdateRelatedItemsRequestBodyRelatedItemsUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=itemToAdd" })
  itemToAdd?: shared.RelatedItem;

  @Metadata({ data: "json, name=itemToRemove" })
  itemToRemove?: shared.ItemIdentifier;
}


export class UpdateRelatedItemsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=incidentRecordArn" })
  incidentRecordArn: string;

  @Metadata({ data: "json, name=relatedItemsUpdate" })
  relatedItemsUpdate: UpdateRelatedItemsRequestBodyRelatedItemsUpdate;
}


export class UpdateRelatedItemsRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateRelatedItemsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateRelatedItemsRequestBody;
}


export class UpdateRelatedItemsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateRelatedItemsOutput?: Map<string, any>;

  @Metadata()
  validationException?: any;
}
