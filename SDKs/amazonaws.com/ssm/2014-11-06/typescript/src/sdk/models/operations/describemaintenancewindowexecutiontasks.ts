import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DescribeMaintenanceWindowExecutionTasksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeMaintenanceWindowExecutionTasksXAmzTargetEnum {
    AmazonSsmDescribeMaintenanceWindowExecutionTasks = "AmazonSSM.DescribeMaintenanceWindowExecutionTasks"
}


export class DescribeMaintenanceWindowExecutionTasksHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeMaintenanceWindowExecutionTasksXAmzTargetEnum;
}


export class DescribeMaintenanceWindowExecutionTasksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DescribeMaintenanceWindowExecutionTasksQueryParams;

  @SpeakeasyMetadata()
  headers: DescribeMaintenanceWindowExecutionTasksHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DescribeMaintenanceWindowExecutionTasksRequest;
}


export class DescribeMaintenanceWindowExecutionTasksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeMaintenanceWindowExecutionTasksResult?: shared.DescribeMaintenanceWindowExecutionTasksResult;

  @SpeakeasyMetadata()
  doesNotExistException?: any;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
