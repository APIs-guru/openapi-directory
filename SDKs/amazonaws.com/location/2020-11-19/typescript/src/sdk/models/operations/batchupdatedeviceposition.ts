import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchUpdateDevicePositionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=TrackerName" })
  trackerName: string;
}


export class BatchUpdateDevicePositionHeaders extends SpeakeasyBase {
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


export class BatchUpdateDevicePositionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Updates", elemType: shared.DevicePositionUpdate })
  updates: shared.DevicePositionUpdate[];
}


export class BatchUpdateDevicePositionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BatchUpdateDevicePositionPathParams;

  @Metadata()
  headers: BatchUpdateDevicePositionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: BatchUpdateDevicePositionRequestBody;
}


export class BatchUpdateDevicePositionResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  batchUpdateDevicePositionResponse?: shared.BatchUpdateDevicePositionResponse;

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
