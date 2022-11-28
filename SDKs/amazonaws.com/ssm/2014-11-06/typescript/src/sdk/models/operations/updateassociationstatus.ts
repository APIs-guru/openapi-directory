import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdateAssociationStatusXAmzTargetEnum {
    AmazonSsmUpdateAssociationStatus = "AmazonSSM.UpdateAssociationStatus"
}


export class UpdateAssociationStatusHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateAssociationStatusXAmzTargetEnum;
}


export class UpdateAssociationStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateAssociationStatusHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateAssociationStatusRequest;
}


export class UpdateAssociationStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationDoesNotExist?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  invalidDocument?: any;

  @SpeakeasyMetadata()
  invalidInstanceId?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  statusUnchanged?: any;

  @SpeakeasyMetadata()
  tooManyUpdates?: any;

  @SpeakeasyMetadata()
  updateAssociationStatusResult?: shared.UpdateAssociationStatusResult;
}
