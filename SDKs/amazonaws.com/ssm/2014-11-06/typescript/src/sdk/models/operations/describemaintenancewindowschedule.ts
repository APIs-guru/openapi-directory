import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeMaintenanceWindowScheduleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeMaintenanceWindowScheduleXAmzTargetEnum {
    AmazonSsmDescribeMaintenanceWindowSchedule = "AmazonSSM.DescribeMaintenanceWindowSchedule"
}


export class DescribeMaintenanceWindowScheduleHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeMaintenanceWindowScheduleXAmzTargetEnum;
}


export class DescribeMaintenanceWindowScheduleRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeMaintenanceWindowScheduleQueryParams;

  @Metadata()
  headers: DescribeMaintenanceWindowScheduleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeMaintenanceWindowScheduleRequest;
}


export class DescribeMaintenanceWindowScheduleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeMaintenanceWindowScheduleResult?: shared.DescribeMaintenanceWindowScheduleResult;

  @Metadata()
  doesNotExistException?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
