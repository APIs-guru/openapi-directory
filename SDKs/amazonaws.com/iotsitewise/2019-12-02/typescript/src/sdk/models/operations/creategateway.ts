import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateGatewayHeaders extends SpeakeasyBase {
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


// CreateGatewayRequestBodyGatewayPlatform
/** 
 * Contains a gateway's platform information.
**/
export class CreateGatewayRequestBodyGatewayPlatform extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=greengrass" })
  greengrass?: shared.Greengrass;

  @SpeakeasyMetadata({ data: "json, name=greengrassV2" })
  greengrassV2?: shared.GreengrassV2;
}


export class CreateGatewayRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gatewayName" })
  gatewayName: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayPlatform" })
  gatewayPlatform: CreateGatewayRequestBodyGatewayPlatform;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateGatewayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateGatewayHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateGatewayRequestBody;
}


export class CreateGatewayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createGatewayResponse?: shared.CreateGatewayResponse;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
