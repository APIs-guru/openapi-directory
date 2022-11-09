import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeTagsXAmzTargetEnum {
    WorkspacesServiceDescribeTags = "WorkspacesService.DescribeTags"
}


export class DescribeTagsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeTagsXAmzTargetEnum;
}


export class DescribeTagsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeTagsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeTagsRequest;
}


export class DescribeTagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeTagsResult?: shared.DescribeTagsResult;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
