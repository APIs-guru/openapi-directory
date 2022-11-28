import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateGatewayPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=gatewayId" })
  gatewayId: string;
}


export class UpdateGatewayHeaders extends SpeakeasyBase {
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


export class UpdateGatewayRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gatewayName" })
  gatewayName: string;
}


export class UpdateGatewayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateGatewayPathParams;

  @SpeakeasyMetadata()
  headers: UpdateGatewayHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateGatewayRequestBody;
}


export class UpdateGatewayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictingOperationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
