import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDeviceRegistrationHeaders extends SpeakeasyBase {
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


export class GetDeviceRegistrationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceFleetName" })
  deviceFleetName: string;

  @Metadata({ data: "json, name=DeviceName" })
  deviceName: string;
}


export class GetDeviceRegistrationRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetDeviceRegistrationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetDeviceRegistrationRequestBody;
}


export class GetDeviceRegistrationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDeviceRegistrationResult?: shared.GetDeviceRegistrationResult;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  statusCode: number;
}
