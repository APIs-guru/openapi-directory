import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateDevicePolicyConfigurationHeaders extends SpeakeasyBase {
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


export class UpdateDevicePolicyConfigurationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceCaCertificate" })
  deviceCaCertificate?: string;

  @SpeakeasyMetadata({ data: "json, name=FleetArn" })
  fleetArn: string;
}


export class UpdateDevicePolicyConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateDevicePolicyConfigurationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateDevicePolicyConfigurationRequestBody;
}


export class UpdateDevicePolicyConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerErrorException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;

  @SpeakeasyMetadata()
  updateDevicePolicyConfigurationResponse?: Map<string, any>;
}
