import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DescribeMaintenanceWindowExecutionTaskInvocationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeMaintenanceWindowExecutionTaskInvocationsXAmzTargetEnum {
    AmazonSsmDescribeMaintenanceWindowExecutionTaskInvocations = "AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations"
}


export class DescribeMaintenanceWindowExecutionTaskInvocationsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeMaintenanceWindowExecutionTaskInvocationsXAmzTargetEnum;
}


export class DescribeMaintenanceWindowExecutionTaskInvocationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DescribeMaintenanceWindowExecutionTaskInvocationsQueryParams;

  @SpeakeasyMetadata()
  headers: DescribeMaintenanceWindowExecutionTaskInvocationsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DescribeMaintenanceWindowExecutionTaskInvocationsRequest;
}


export class DescribeMaintenanceWindowExecutionTaskInvocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeMaintenanceWindowExecutionTaskInvocationsResult?: shared.DescribeMaintenanceWindowExecutionTaskInvocationsResult;

  @SpeakeasyMetadata()
  doesNotExistException?: any;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
