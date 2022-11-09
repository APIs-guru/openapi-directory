import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeInstancePatchStatesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeInstancePatchStatesXAmzTargetEnum {
    AmazonSsmDescribeInstancePatchStates = "AmazonSSM.DescribeInstancePatchStates"
}


export class DescribeInstancePatchStatesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeInstancePatchStatesXAmzTargetEnum;
}


export class DescribeInstancePatchStatesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeInstancePatchStatesQueryParams;

  @Metadata()
  headers: DescribeInstancePatchStatesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeInstancePatchStatesRequest;
}


export class DescribeInstancePatchStatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeInstancePatchStatesResult?: shared.DescribeInstancePatchStatesResult;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidNextToken?: any;

  @Metadata()
  statusCode: number;
}
