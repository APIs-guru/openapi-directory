import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BatchDeleteDevicePositionHistoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TrackerName" })
  trackerName: string;
}


export class BatchDeleteDevicePositionHistoryHeaders extends SpeakeasyBase {
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


export class BatchDeleteDevicePositionHistoryRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceIds" })
  deviceIds: string[];
}


export class BatchDeleteDevicePositionHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BatchDeleteDevicePositionHistoryPathParams;

  @SpeakeasyMetadata()
  headers: BatchDeleteDevicePositionHistoryHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: BatchDeleteDevicePositionHistoryRequestBody;
}


export class BatchDeleteDevicePositionHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  batchDeleteDevicePositionHistoryResponse?: shared.BatchDeleteDevicePositionHistoryResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
