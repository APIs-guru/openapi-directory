import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum TagResourceXAmzTargetEnum {
    AmazonMemoryDbTagResource = "AmazonMemoryDB.TagResource"
}


export class TagResourceHeaders extends SpeakeasyBase {
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
  xAmzTarget: TagResourceXAmzTargetEnum;
}


export class TagResourceRequest extends SpeakeasyBase {
  @Metadata()
  headers: TagResourceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.TagResourceRequest;
}


export class TagResourceResponse extends SpeakeasyBase {
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
  tagQuotaPerResourceExceeded?: any;

  @Metadata()
  tagResourceResponse?: shared.TagResourceResponse;

  @Metadata()
  userNotFoundFault?: any;
}
