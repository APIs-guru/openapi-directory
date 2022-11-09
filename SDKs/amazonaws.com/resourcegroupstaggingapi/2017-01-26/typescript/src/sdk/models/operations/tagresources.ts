import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum TagResourcesXAmzTargetEnum {
    ResourceGroupsTaggingApi20170126TagResources = "ResourceGroupsTaggingAPI_20170126.TagResources"
}


export class TagResourcesHeaders extends SpeakeasyBase {
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
  xAmzTarget: TagResourcesXAmzTargetEnum;
}


export class TagResourcesRequest extends SpeakeasyBase {
  @Metadata()
  headers: TagResourcesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.TagResourcesInput;
}


export class TagResourcesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagResourcesOutput?: shared.TagResourcesOutput;

  @Metadata()
  throttledException?: any;
}
