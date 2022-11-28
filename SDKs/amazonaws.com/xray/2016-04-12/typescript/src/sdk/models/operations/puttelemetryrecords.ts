import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutTelemetryRecordsHeaders extends SpeakeasyBase {
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
}


export class PutTelemetryRecordsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EC2InstanceId" })
  ec2InstanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=Hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceARN" })
  resourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TelemetryRecords", elemType: shared.TelemetryRecord })
  telemetryRecords: shared.TelemetryRecord[];
}


export class PutTelemetryRecordsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutTelemetryRecordsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutTelemetryRecordsRequestBody;
}


export class PutTelemetryRecordsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  putTelemetryRecordsResult?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttledException?: any;
}
