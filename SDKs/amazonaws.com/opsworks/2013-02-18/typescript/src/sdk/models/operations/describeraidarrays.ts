import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeRaidArraysXAmzTargetEnum {
    OpsWorks20130218DescribeRaidArrays = "OpsWorks_20130218.DescribeRaidArrays"
}


export class DescribeRaidArraysHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeRaidArraysXAmzTargetEnum;
}


export class DescribeRaidArraysRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeRaidArraysHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeRaidArraysRequest;
}


export class DescribeRaidArraysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeRaidArraysResult?: shared.DescribeRaidArraysResult;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
