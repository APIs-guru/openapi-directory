import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeMaintenanceWindowTasksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeMaintenanceWindowTasksXAmzTargetEnum {
    AmazonSsmDescribeMaintenanceWindowTasks = "AmazonSSM.DescribeMaintenanceWindowTasks"
}


export class DescribeMaintenanceWindowTasksHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeMaintenanceWindowTasksXAmzTargetEnum;
}


export class DescribeMaintenanceWindowTasksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeMaintenanceWindowTasksQueryParams;

  @Metadata()
  headers: DescribeMaintenanceWindowTasksHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeMaintenanceWindowTasksRequest;
}


export class DescribeMaintenanceWindowTasksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeMaintenanceWindowTasksResult?: shared.DescribeMaintenanceWindowTasksResult;

  @Metadata()
  doesNotExistException?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
