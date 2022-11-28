import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdateEndpointWeightsAndCapacitiesXAmzTargetEnum {
    SageMakerUpdateEndpointWeightsAndCapacities = "SageMaker.UpdateEndpointWeightsAndCapacities"
}


export class UpdateEndpointWeightsAndCapacitiesHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: UpdateEndpointWeightsAndCapacitiesXAmzTargetEnum;
}


export class UpdateEndpointWeightsAndCapacitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateEndpointWeightsAndCapacitiesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateEndpointWeightsAndCapacitiesInput;
}


export class UpdateEndpointWeightsAndCapacitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceLimitExceeded?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateEndpointWeightsAndCapacitiesOutput?: shared.UpdateEndpointWeightsAndCapacitiesOutput;
}
