import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeStacksXAmzTargetEnum {
    OpsWorks20130218DescribeStacks = "OpsWorks_20130218.DescribeStacks"
}


export class DescribeStacksHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeStacksXAmzTargetEnum;
}


export class DescribeStacksRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeStacksHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeStacksRequest;
}


export class DescribeStacksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeStacksResult?: shared.DescribeStacksResult;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
