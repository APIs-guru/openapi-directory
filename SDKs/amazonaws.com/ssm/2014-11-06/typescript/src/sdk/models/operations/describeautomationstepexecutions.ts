import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DescribeAutomationStepExecutionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeAutomationStepExecutionsXAmzTargetEnum {
    AmazonSsmDescribeAutomationStepExecutions = "AmazonSSM.DescribeAutomationStepExecutions"
}


export class DescribeAutomationStepExecutionsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DescribeAutomationStepExecutionsXAmzTargetEnum;
}


export class DescribeAutomationStepExecutionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DescribeAutomationStepExecutionsQueryParams;

  @SpeakeasyMetadata()
  headers: DescribeAutomationStepExecutionsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DescribeAutomationStepExecutionsRequest;
}


export class DescribeAutomationStepExecutionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  automationExecutionNotFoundException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeAutomationStepExecutionsResult?: shared.DescribeAutomationStepExecutionsResult;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  invalidFilterKey?: any;

  @SpeakeasyMetadata()
  invalidFilterValue?: any;

  @SpeakeasyMetadata()
  invalidNextToken?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
