import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutGeofencePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=CollectionName" })
  collectionName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=GeofenceId" })
  geofenceId: string;
}


export class PutGeofenceHeaders extends SpeakeasyBase {
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


// PutGeofenceRequestBodyGeometry
/** 
 * <p>Contains the geofence geometry details.</p> <note> <p>Amazon Location doesn't currently support polygons with holes, multipolygons, polygons that are wound clockwise, or that cross the antimeridian. </p> </note>
**/
export class PutGeofenceRequestBodyGeometry extends SpeakeasyBase {
  @Metadata({ data: "json, name=Polygon" })
  polygon?: number[][][];
}


export class PutGeofenceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Geometry" })
  geometry: PutGeofenceRequestBodyGeometry;
}


export class PutGeofenceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutGeofencePathParams;

  @Metadata()
  headers: PutGeofenceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutGeofenceRequestBody;
}


export class PutGeofenceResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  putGeofenceResponse?: shared.PutGeofenceResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
