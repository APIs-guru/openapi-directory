import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeAutomationExecutionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeAutomationExecutionsXAmzTargetEnum {
    AmazonSsmDescribeAutomationExecutions = "AmazonSSM.DescribeAutomationExecutions"
}


export class DescribeAutomationExecutionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeAutomationExecutionsXAmzTargetEnum;
}


export class DescribeAutomationExecutionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeAutomationExecutionsQueryParams;

  @Metadata()
  headers: DescribeAutomationExecutionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeAutomationExecutionsRequest;
}


export class DescribeAutomationExecutionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeAutomationExecutionsResult?: shared.DescribeAutomationExecutionsResult;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidFilterKey?: any;

  @Metadata()
  invalidFilterValue?: any;

  @Metadata()
  invalidNextToken?: any;

  @Metadata()
  statusCode: number;
}
