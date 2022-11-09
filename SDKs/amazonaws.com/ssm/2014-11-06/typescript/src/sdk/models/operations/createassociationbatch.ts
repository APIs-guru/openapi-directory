import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateAssociationBatchXAmzTargetEnum {
    AmazonSsmCreateAssociationBatch = "AmazonSSM.CreateAssociationBatch"
}


export class CreateAssociationBatchHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateAssociationBatchXAmzTargetEnum;
}


export class CreateAssociationBatchRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateAssociationBatchHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateAssociationBatchRequest;
}


export class CreateAssociationBatchResponse extends SpeakeasyBase {
  @Metadata()
  associationLimitExceeded?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createAssociationBatchResult?: shared.CreateAssociationBatchResult;

  @Metadata()
  duplicateInstanceId?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidDocument?: any;

  @Metadata()
  invalidDocumentVersion?: any;

  @Metadata()
  invalidInstanceId?: any;

  @Metadata()
  invalidOutputLocation?: any;

  @Metadata()
  invalidParameters?: any;

  @Metadata()
  invalidSchedule?: any;

  @Metadata()
  invalidTarget?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedPlatformType?: any;
}
