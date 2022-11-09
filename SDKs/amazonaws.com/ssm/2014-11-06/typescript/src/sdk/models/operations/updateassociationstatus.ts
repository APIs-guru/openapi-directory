import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateAssociationStatusXAmzTargetEnum {
    AmazonSsmUpdateAssociationStatus = "AmazonSSM.UpdateAssociationStatus"
}


export class UpdateAssociationStatusHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateAssociationStatusXAmzTargetEnum;
}


export class UpdateAssociationStatusRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateAssociationStatusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateAssociationStatusRequest;
}


export class UpdateAssociationStatusResponse extends SpeakeasyBase {
  @Metadata()
  associationDoesNotExist?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidDocument?: any;

  @Metadata()
  invalidInstanceId?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  statusUnchanged?: any;

  @Metadata()
  tooManyUpdates?: any;

  @Metadata()
  updateAssociationStatusResult?: shared.UpdateAssociationStatusResult;
}
