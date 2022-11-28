import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DescribeActivityTypeXAmzTargetEnum {
    SimpleWorkflowServiceDescribeActivityType = "SimpleWorkflowService.DescribeActivityType"
}


export class DescribeActivityTypeHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeActivityTypeXAmzTargetEnum;
}


export class DescribeActivityTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DescribeActivityTypeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DescribeActivityTypeInput;
}


export class DescribeActivityTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityTypeDetail?: shared.ActivityTypeDetail;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  operationNotPermittedFault?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unknownResourceFault?: any;
}
