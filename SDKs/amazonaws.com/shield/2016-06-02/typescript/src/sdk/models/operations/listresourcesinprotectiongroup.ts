import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListResourcesInProtectionGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListResourcesInProtectionGroupXAmzTargetEnum {
    AwsShield20160616ListResourcesInProtectionGroup = "AWSShield_20160616.ListResourcesInProtectionGroup"
}


export class ListResourcesInProtectionGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListResourcesInProtectionGroupXAmzTargetEnum;
}


export class ListResourcesInProtectionGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListResourcesInProtectionGroupQueryParams;

  @Metadata()
  headers: ListResourcesInProtectionGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListResourcesInProtectionGroupRequest;
}


export class ListResourcesInProtectionGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidPaginationTokenException?: any;

  @Metadata()
  listResourcesInProtectionGroupResponse?: shared.ListResourcesInProtectionGroupResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
