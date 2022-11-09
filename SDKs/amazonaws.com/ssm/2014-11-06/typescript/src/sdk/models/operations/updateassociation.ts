import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateAssociationXAmzTargetEnum {
    AmazonSsmUpdateAssociation = "AmazonSSM.UpdateAssociation"
}


export class UpdateAssociationHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateAssociationXAmzTargetEnum;
}


export class UpdateAssociationRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateAssociationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateAssociationRequest;
}


export class UpdateAssociationResponse extends SpeakeasyBase {
  @Metadata()
  associationDoesNotExist?: any;

  @Metadata()
  associationVersionLimitExceeded?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidAssociationVersion?: any;

  @Metadata()
  invalidDocument?: any;

  @Metadata()
  invalidDocumentVersion?: any;

  @Metadata()
  invalidOutputLocation?: any;

  @Metadata()
  invalidParameters?: any;

  @Metadata()
  invalidSchedule?: any;

  @Metadata()
  invalidTarget?: any;

  @Metadata()
  invalidUpdate?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyUpdates?: any;

  @Metadata()
  updateAssociationResult?: shared.UpdateAssociationResult;
}
