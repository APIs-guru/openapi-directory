import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateAssociationXAmzTargetEnum {
    AmazonSsmCreateAssociation = "AmazonSSM.CreateAssociation"
}


export class CreateAssociationHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateAssociationXAmzTargetEnum;
}


export class CreateAssociationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateAssociationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateAssociationRequest;
}


export class CreateAssociationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationAlreadyExists?: any;

  @SpeakeasyMetadata()
  associationLimitExceeded?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createAssociationResult?: shared.CreateAssociationResult;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  invalidDocument?: any;

  @SpeakeasyMetadata()
  invalidDocumentVersion?: any;

  @SpeakeasyMetadata()
  invalidInstanceId?: any;

  @SpeakeasyMetadata()
  invalidOutputLocation?: any;

  @SpeakeasyMetadata()
  invalidParameters?: any;

  @SpeakeasyMetadata()
  invalidSchedule?: any;

  @SpeakeasyMetadata()
  invalidTarget?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unsupportedPlatformType?: any;
}
