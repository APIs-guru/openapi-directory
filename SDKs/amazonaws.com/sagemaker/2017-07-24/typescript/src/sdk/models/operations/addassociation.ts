import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AddAssociationXAmzTargetEnum {
    SageMakerAddAssociation = "SageMaker.AddAssociation"
}


export class AddAssociationHeaders extends SpeakeasyBase {
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
  xAmzTarget: AddAssociationXAmzTargetEnum;
}


export class AddAssociationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AddAssociationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AddAssociationRequest;
}


export class AddAssociationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addAssociationResponse?: shared.AddAssociationResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceLimitExceeded?: any;

  @SpeakeasyMetadata()
  resourceNotFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
