import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateConnectorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectorArn" })
  connectorArn: string;
}


export class UpdateConnectorQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentVersion" })
  currentVersion: string;
}


export class UpdateConnectorHeaders extends SpeakeasyBase {
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


// UpdateConnectorRequestBodyCapacity
/** 
 * The target capacity for the connector. The capacity can be auto scaled or provisioned.
**/
export class UpdateConnectorRequestBodyCapacity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoScaling" })
  autoScaling?: shared.AutoScalingUpdate;

  @SpeakeasyMetadata({ data: "json, name=provisionedCapacity" })
  provisionedCapacity?: shared.ProvisionedCapacityUpdate;
}


export class UpdateConnectorRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capacity" })
  capacity: UpdateConnectorRequestBodyCapacity;
}


export class UpdateConnectorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateConnectorPathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateConnectorQueryParams;

  @SpeakeasyMetadata()
  headers: UpdateConnectorHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateConnectorRequestBody;
}


export class UpdateConnectorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  forbiddenException?: any;

  @SpeakeasyMetadata()
  internalServerErrorException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;

  @SpeakeasyMetadata()
  updateConnectorResponse?: shared.UpdateConnectorResponse;
}
