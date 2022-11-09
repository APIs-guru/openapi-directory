import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeParametersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeParametersXAmzTargetEnum {
    AmazonSsmDescribeParameters = "AmazonSSM.DescribeParameters"
}


export class DescribeParametersHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeParametersXAmzTargetEnum;
}


export class DescribeParametersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeParametersQueryParams;

  @Metadata()
  headers: DescribeParametersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeParametersRequest;
}


export class DescribeParametersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeParametersResult?: shared.DescribeParametersResult;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidFilterKey?: any;

  @Metadata()
  invalidFilterOption?: any;

  @Metadata()
  invalidFilterValue?: any;

  @Metadata()
  invalidNextToken?: any;

  @Metadata()
  statusCode: number;
}
