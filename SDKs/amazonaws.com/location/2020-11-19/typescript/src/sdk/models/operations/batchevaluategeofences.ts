import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchEvaluateGeofencesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=CollectionName" })
  collectionName: string;
}


export class BatchEvaluateGeofencesHeaders extends SpeakeasyBase {
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


export class BatchEvaluateGeofencesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=DevicePositionUpdates", elemType: shared.DevicePositionUpdate })
  devicePositionUpdates: shared.DevicePositionUpdate[];
}


export class BatchEvaluateGeofencesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BatchEvaluateGeofencesPathParams;

  @Metadata()
  headers: BatchEvaluateGeofencesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: BatchEvaluateGeofencesRequestBody;
}


export class BatchEvaluateGeofencesResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  batchEvaluateGeofencesResponse?: shared.BatchEvaluateGeofencesResponse;

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
