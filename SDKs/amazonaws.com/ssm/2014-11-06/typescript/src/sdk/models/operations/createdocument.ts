import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateDocumentXAmzTargetEnum {
    AmazonSsmCreateDocument = "AmazonSSM.CreateDocument"
}


export class CreateDocumentHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateDocumentXAmzTargetEnum;
}


export class CreateDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateDocumentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateDocumentRequest;
}


export class CreateDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createDocumentResult?: shared.CreateDocumentResult;

  @SpeakeasyMetadata()
  documentAlreadyExists?: any;

  @SpeakeasyMetadata()
  documentLimitExceeded?: any;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  invalidDocumentContent?: any;

  @SpeakeasyMetadata()
  invalidDocumentSchemaVersion?: any;

  @SpeakeasyMetadata()
  maxDocumentSizeExceeded?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
