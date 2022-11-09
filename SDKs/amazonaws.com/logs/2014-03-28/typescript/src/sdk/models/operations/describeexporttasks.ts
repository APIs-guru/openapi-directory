import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeExportTasksXAmzTargetEnum {
    Logs20140328DescribeExportTasks = "Logs_20140328.DescribeExportTasks"
}


export class DescribeExportTasksHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeExportTasksXAmzTargetEnum;
}


export class DescribeExportTasksRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeExportTasksHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeExportTasksRequest;
}


export class DescribeExportTasksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeExportTasksResponse?: shared.DescribeExportTasksResponse;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
