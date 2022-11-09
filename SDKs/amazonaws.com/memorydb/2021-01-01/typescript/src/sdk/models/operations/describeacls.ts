import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeAcLsXAmzTargetEnum {
    AmazonMemoryDbDescribeAcLs = "AmazonMemoryDB.DescribeACLs"
}


export class DescribeAcLsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeAcLsXAmzTargetEnum;
}


export class DescribeAcLsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeAcLsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeAcLsRequest;
}


export class DescribeAcLsResponse extends SpeakeasyBase {
  @Metadata()
  aclNotFoundFault?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeAcLsResponse?: shared.DescribeAcLsResponse;

  @Metadata()
  invalidParameterCombinationException?: any;

  @Metadata()
  statusCode: number;
}
