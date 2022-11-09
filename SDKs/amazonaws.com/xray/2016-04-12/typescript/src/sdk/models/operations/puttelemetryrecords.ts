import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutTelemetryRecordsHeaders extends SpeakeasyBase {
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
}


export class PutTelemetryRecordsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=EC2InstanceId" })
  ec2InstanceId?: string;

  @Metadata({ data: "json, name=Hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=ResourceARN" })
  resourceArn?: string;

  @Metadata({ data: "json, name=TelemetryRecords", elemType: shared.TelemetryRecord })
  telemetryRecords: shared.TelemetryRecord[];
}


export class PutTelemetryRecordsRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutTelemetryRecordsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutTelemetryRecordsRequestBody;
}


export class PutTelemetryRecordsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  putTelemetryRecordsResult?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttledException?: any;
}
