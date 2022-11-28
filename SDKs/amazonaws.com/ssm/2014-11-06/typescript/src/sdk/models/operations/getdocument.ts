import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetDocumentXAmzTargetEnum {
    AmazonSsmGetDocument = "AmazonSSM.GetDocument"
}


export class GetDocumentHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetDocumentXAmzTargetEnum;
}


export class GetDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetDocumentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetDocumentRequest;
}


export class GetDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDocumentResult?: shared.GetDocumentResult;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  invalidDocument?: any;

  @SpeakeasyMetadata()
  invalidDocumentVersion?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
