import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateConnectorPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=connectorArn" })
  connectorArn: string;
}


export class UpdateConnectorQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=currentVersion" })
  currentVersion: string;
}


export class UpdateConnectorHeaders extends SpeakeasyBase {
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


// UpdateConnectorRequestBodyCapacity
/** 
 * The target capacity for the connector. The capacity can be auto scaled or provisioned.
**/
export class UpdateConnectorRequestBodyCapacity extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoScaling" })
  autoScaling?: shared.AutoScalingUpdate;

  @Metadata({ data: "json, name=provisionedCapacity" })
  provisionedCapacity?: shared.ProvisionedCapacityUpdate;
}


export class UpdateConnectorRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=capacity" })
  capacity: UpdateConnectorRequestBodyCapacity;
}


export class UpdateConnectorRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateConnectorPathParams;

  @Metadata()
  queryParams: UpdateConnectorQueryParams;

  @Metadata()
  headers: UpdateConnectorHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateConnectorRequestBody;
}


export class UpdateConnectorResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unauthorizedException?: any;

  @Metadata()
  updateConnectorResponse?: shared.UpdateConnectorResponse;
}
