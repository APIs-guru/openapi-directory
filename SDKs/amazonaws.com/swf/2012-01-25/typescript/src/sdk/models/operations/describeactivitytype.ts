import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeActivityTypeXAmzTargetEnum {
    SimpleWorkflowServiceDescribeActivityType = "SimpleWorkflowService.DescribeActivityType"
}


export class DescribeActivityTypeHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeActivityTypeXAmzTargetEnum;
}


export class DescribeActivityTypeRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeActivityTypeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeActivityTypeInput;
}


export class DescribeActivityTypeResponse extends SpeakeasyBase {
  @Metadata()
  activityTypeDetail?: shared.ActivityTypeDetail;

  @Metadata()
  contentType: string;

  @Metadata()
  operationNotPermittedFault?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unknownResourceFault?: any;
}
