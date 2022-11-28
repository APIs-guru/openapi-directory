import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateAssociationBatchXAmzTargetEnum {
    AmazonSsmCreateAssociationBatch = "AmazonSSM.CreateAssociationBatch"
}


export class CreateAssociationBatchHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateAssociationBatchXAmzTargetEnum;
}


export class CreateAssociationBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateAssociationBatchHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateAssociationBatchRequest;
}


export class CreateAssociationBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationLimitExceeded?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createAssociationBatchResult?: shared.CreateAssociationBatchResult;

  @SpeakeasyMetadata()
  duplicateInstanceId?: any;

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
