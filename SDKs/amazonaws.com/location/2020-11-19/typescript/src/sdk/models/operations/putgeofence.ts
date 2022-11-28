import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutGeofencePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CollectionName" })
  collectionName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=GeofenceId" })
  geofenceId: string;
}


export class PutGeofenceHeaders extends SpeakeasyBase {
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


// PutGeofenceRequestBodyGeometry
/** 
 * <p>Contains the geofence geometry details.</p> <note> <p>Amazon Location doesn't currently support polygons with holes, multipolygons, polygons that are wound clockwise, or that cross the antimeridian. </p> </note>
**/
export class PutGeofenceRequestBodyGeometry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Polygon" })
  polygon?: number[][][];
}


export class PutGeofenceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Geometry" })
  geometry: PutGeofenceRequestBodyGeometry;
}


export class PutGeofenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutGeofencePathParams;

  @SpeakeasyMetadata()
  headers: PutGeofenceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutGeofenceRequestBody;
}


export class PutGeofenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  putGeofenceResponse?: shared.PutGeofenceResponse;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
