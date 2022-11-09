import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListAllowedNodeTypeUpdatesXAmzTargetEnum {
    AmazonMemoryDbListAllowedNodeTypeUpdates = "AmazonMemoryDB.ListAllowedNodeTypeUpdates"
}


export class ListAllowedNodeTypeUpdatesHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ListAllowedNodeTypeUpdatesXAmzTargetEnum;
}


export class ListAllowedNodeTypeUpdatesRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListAllowedNodeTypeUpdatesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListAllowedNodeTypeUpdatesRequest;
}


export class ListAllowedNodeTypeUpdatesResponse extends SpeakeasyBase {
  @Metadata()
  clusterNotFoundFault?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterCombinationException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  listAllowedNodeTypeUpdatesResponse?: shared.ListAllowedNodeTypeUpdatesResponse;

  @Metadata()
  serviceLinkedRoleNotFoundFault?: any;

  @Metadata()
  statusCode: number;
}
