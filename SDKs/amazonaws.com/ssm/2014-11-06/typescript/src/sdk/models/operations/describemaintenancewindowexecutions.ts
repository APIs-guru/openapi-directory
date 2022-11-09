import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeMaintenanceWindowExecutionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeMaintenanceWindowExecutionsXAmzTargetEnum {
    AmazonSsmDescribeMaintenanceWindowExecutions = "AmazonSSM.DescribeMaintenanceWindowExecutions"
}


export class DescribeMaintenanceWindowExecutionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeMaintenanceWindowExecutionsXAmzTargetEnum;
}


export class DescribeMaintenanceWindowExecutionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeMaintenanceWindowExecutionsQueryParams;

  @Metadata()
  headers: DescribeMaintenanceWindowExecutionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeMaintenanceWindowExecutionsRequest;
}


export class DescribeMaintenanceWindowExecutionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeMaintenanceWindowExecutionsResult?: shared.DescribeMaintenanceWindowExecutionsResult;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
