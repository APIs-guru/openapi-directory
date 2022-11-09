import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeMaintenanceWindowTargetsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeMaintenanceWindowTargetsXAmzTargetEnum {
    AmazonSsmDescribeMaintenanceWindowTargets = "AmazonSSM.DescribeMaintenanceWindowTargets"
}


export class DescribeMaintenanceWindowTargetsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeMaintenanceWindowTargetsXAmzTargetEnum;
}


export class DescribeMaintenanceWindowTargetsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeMaintenanceWindowTargetsQueryParams;

  @Metadata()
  headers: DescribeMaintenanceWindowTargetsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeMaintenanceWindowTargetsRequest;
}


export class DescribeMaintenanceWindowTargetsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeMaintenanceWindowTargetsResult?: shared.DescribeMaintenanceWindowTargetsResult;

  @Metadata()
  doesNotExistException?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
