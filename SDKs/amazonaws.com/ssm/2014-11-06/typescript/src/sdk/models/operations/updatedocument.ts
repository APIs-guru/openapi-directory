import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdateDocumentXAmzTargetEnum {
    AmazonSsmUpdateDocument = "AmazonSSM.UpdateDocument"
}


export class UpdateDocumentHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateDocumentXAmzTargetEnum;
}


export class UpdateDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateDocumentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateDocumentRequest;
}


export class UpdateDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  documentVersionLimitExceeded?: any;

  @SpeakeasyMetadata()
  duplicateDocumentContent?: any;

  @SpeakeasyMetadata()
  duplicateDocumentVersionName?: any;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  invalidDocument?: any;

  @SpeakeasyMetadata()
  invalidDocumentContent?: any;

  @SpeakeasyMetadata()
  invalidDocumentOperation?: any;

  @SpeakeasyMetadata()
  invalidDocumentSchemaVersion?: any;

  @SpeakeasyMetadata()
  invalidDocumentVersion?: any;

  @SpeakeasyMetadata()
  maxDocumentSizeExceeded?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateDocumentResult?: shared.UpdateDocumentResult;
}
