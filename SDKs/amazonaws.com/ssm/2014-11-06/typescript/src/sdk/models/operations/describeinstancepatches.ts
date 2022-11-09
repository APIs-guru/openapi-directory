import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeInstancePatchesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeInstancePatchesXAmzTargetEnum {
    AmazonSsmDescribeInstancePatches = "AmazonSSM.DescribeInstancePatches"
}


export class DescribeInstancePatchesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeInstancePatchesXAmzTargetEnum;
}


export class DescribeInstancePatchesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeInstancePatchesQueryParams;

  @Metadata()
  headers: DescribeInstancePatchesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeInstancePatchesRequest;
}


export class DescribeInstancePatchesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeInstancePatchesResult?: shared.DescribeInstancePatchesResult;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidFilter?: any;

  @Metadata()
  invalidInstanceId?: any;

  @Metadata()
  invalidNextToken?: any;

  @Metadata()
  statusCode: number;
}
