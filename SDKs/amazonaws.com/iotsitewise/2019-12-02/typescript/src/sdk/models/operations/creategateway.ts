import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateGatewayHeaders extends SpeakeasyBase {
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


// CreateGatewayRequestBodyGatewayPlatform
/** 
 * Contains a gateway's platform information.
**/
export class CreateGatewayRequestBodyGatewayPlatform extends SpeakeasyBase {
  @Metadata({ data: "json, name=greengrass" })
  greengrass?: shared.Greengrass;

  @Metadata({ data: "json, name=greengrassV2" })
  greengrassV2?: shared.GreengrassV2;
}


export class CreateGatewayRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=gatewayName" })
  gatewayName: string;

  @Metadata({ data: "json, name=gatewayPlatform" })
  gatewayPlatform: CreateGatewayRequestBodyGatewayPlatform;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateGatewayRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateGatewayHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateGatewayRequestBody;
}


export class CreateGatewayResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createGatewayResponse?: shared.CreateGatewayResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
