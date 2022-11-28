import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListTagsXAmzTargetEnum {
    AmazonMemoryDbListTags = "AmazonMemoryDB.ListTags"
}


export class ListTagsHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ListTagsXAmzTargetEnum;
}


export class ListTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ListTagsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListTagsRequest;
}


export class ListTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  aclNotFoundFault?: any;

  @SpeakeasyMetadata()
  clusterNotFoundFault?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidArnFault?: any;

  @SpeakeasyMetadata()
  invalidClusterStateFault?: any;

  @SpeakeasyMetadata()
  listTagsResponse?: shared.ListTagsResponse;

  @SpeakeasyMetadata()
  parameterGroupNotFoundFault?: any;

  @SpeakeasyMetadata()
  serviceLinkedRoleNotFoundFault?: any;

  @SpeakeasyMetadata()
  snapshotNotFoundFault?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subnetGroupNotFoundFault?: any;

  @SpeakeasyMetadata()
  userNotFoundFault?: any;
}
