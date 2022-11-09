import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateGatewayCapabilityConfigurationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=gatewayId" })
  gatewayId: string;
}


export class UpdateGatewayCapabilityConfigurationHeaders extends SpeakeasyBase {
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


export class UpdateGatewayCapabilityConfigurationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=capabilityConfiguration" })
  capabilityConfiguration: string;

  @Metadata({ data: "json, name=capabilityNamespace" })
  capabilityNamespace: string;
}


export class UpdateGatewayCapabilityConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateGatewayCapabilityConfigurationPathParams;

  @Metadata()
  headers: UpdateGatewayCapabilityConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateGatewayCapabilityConfigurationRequestBody;
}


export class UpdateGatewayCapabilityConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  conflictingOperationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateGatewayCapabilityConfigurationResponse?: shared.UpdateGatewayCapabilityConfigurationResponse;
}
