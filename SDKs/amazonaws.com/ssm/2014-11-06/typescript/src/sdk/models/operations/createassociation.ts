import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateAssociationXAmzTargetEnum {
    AmazonSsmCreateAssociation = "AmazonSSM.CreateAssociation"
}


export class CreateAssociationHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateAssociationXAmzTargetEnum;
}


export class CreateAssociationRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateAssociationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateAssociationRequest;
}


export class CreateAssociationResponse extends SpeakeasyBase {
  @Metadata()
  associationAlreadyExists?: any;

  @Metadata()
  associationLimitExceeded?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createAssociationResult?: shared.CreateAssociationResult;

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
