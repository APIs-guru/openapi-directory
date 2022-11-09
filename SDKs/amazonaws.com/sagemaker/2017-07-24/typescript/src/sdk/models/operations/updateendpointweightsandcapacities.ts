import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateEndpointWeightsAndCapacitiesXAmzTargetEnum {
    SageMakerUpdateEndpointWeightsAndCapacities = "SageMaker.UpdateEndpointWeightsAndCapacities"
}


export class UpdateEndpointWeightsAndCapacitiesHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: UpdateEndpointWeightsAndCapacitiesXAmzTargetEnum;
}


export class UpdateEndpointWeightsAndCapacitiesRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateEndpointWeightsAndCapacitiesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateEndpointWeightsAndCapacitiesInput;
}


export class UpdateEndpointWeightsAndCapacitiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceLimitExceeded?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateEndpointWeightsAndCapacitiesOutput?: shared.UpdateEndpointWeightsAndCapacitiesOutput;
}
