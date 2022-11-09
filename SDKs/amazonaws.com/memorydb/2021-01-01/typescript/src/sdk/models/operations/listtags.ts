import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListTagsXAmzTargetEnum {
    AmazonMemoryDbListTags = "AmazonMemoryDB.ListTags"
}


export class ListTagsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListTagsXAmzTargetEnum;
}


export class ListTagsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListTagsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListTagsRequest;
}


export class ListTagsResponse extends SpeakeasyBase {
  @Metadata()
  aclNotFoundFault?: any;

  @Metadata()
  clusterNotFoundFault?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidArnFault?: any;

  @Metadata()
  invalidClusterStateFault?: any;

  @Metadata()
  listTagsResponse?: shared.ListTagsResponse;

  @Metadata()
  parameterGroupNotFoundFault?: any;

  @Metadata()
  serviceLinkedRoleNotFoundFault?: any;

  @Metadata()
  snapshotNotFoundFault?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  subnetGroupNotFoundFault?: any;

  @Metadata()
  userNotFoundFault?: any;
}
