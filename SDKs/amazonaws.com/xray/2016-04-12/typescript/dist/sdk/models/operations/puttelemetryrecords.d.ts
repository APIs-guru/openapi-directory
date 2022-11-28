import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutTelemetryRecordsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutTelemetryRecordsRequestBody extends SpeakeasyBase {
    ec2InstanceId?: string;
    hostname?: string;
    resourceArn?: string;
    telemetryRecords: shared.TelemetryRecord[];
}
export declare class PutTelemetryRecordsRequest extends SpeakeasyBase {
    headers: PutTelemetryRecordsHeaders;
    request: PutTelemetryRecordsRequestBody;
}
export declare class PutTelemetryRecordsResponse extends SpeakeasyBase {
    contentType: string;
    invalidRequestException?: any;
    putTelemetryRecordsResult?: Map<string, any>;
    statusCode: number;
    throttledException?: any;
}
