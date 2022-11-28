import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdateAssociationXAmzTargetEnum {
    AmazonSsmUpdateAssociation = "AmazonSSM.UpdateAssociation"
}


export class UpdateAssociationHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateAssociationXAmzTargetEnum;
}


export class UpdateAssociationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateAssociationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateAssociationRequest;
}


export class UpdateAssociationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationDoesNotExist?: any;

  @SpeakeasyMetadata()
  associationVersionLimitExceeded?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  invalidAssociationVersion?: any;

  @SpeakeasyMetadata()
  invalidDocument?: any;

  @SpeakeasyMetadata()
  invalidDocumentVersion?: any;

  @SpeakeasyMetadata()
  invalidOutputLocation?: any;

  @SpeakeasyMetadata()
  invalidParameters?: any;

  @SpeakeasyMetadata()
  invalidSchedule?: any;

  @SpeakeasyMetadata()
  invalidTarget?: any;

  @SpeakeasyMetadata()
  invalidUpdate?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyUpdates?: any;

  @SpeakeasyMetadata()
  updateAssociationResult?: shared.UpdateAssociationResult;
}
