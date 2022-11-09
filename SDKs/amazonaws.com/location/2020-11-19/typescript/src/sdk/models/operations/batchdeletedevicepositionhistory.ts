import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchDeleteDevicePositionHistoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=TrackerName" })
  trackerName: string;
}


export class BatchDeleteDevicePositionHistoryHeaders extends SpeakeasyBase {
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


export class BatchDeleteDevicePositionHistoryRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceIds" })
  deviceIds: string[];
}


export class BatchDeleteDevicePositionHistoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BatchDeleteDevicePositionHistoryPathParams;

  @Metadata()
  headers: BatchDeleteDevicePositionHistoryHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: BatchDeleteDevicePositionHistoryRequestBody;
}


export class BatchDeleteDevicePositionHistoryResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  batchDeleteDevicePositionHistoryResponse?: shared.BatchDeleteDevicePositionHistoryResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
