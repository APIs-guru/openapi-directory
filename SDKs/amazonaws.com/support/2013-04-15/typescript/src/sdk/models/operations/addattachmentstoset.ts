import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AddAttachmentsToSetXAmzTargetEnum {
    AwsSupport20130415AddAttachmentsToSet = "AWSSupport_20130415.AddAttachmentsToSet"
}


export class AddAttachmentsToSetHeaders extends SpeakeasyBase {
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
  xAmzTarget: AddAttachmentsToSetXAmzTargetEnum;
}


export class AddAttachmentsToSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AddAttachmentsToSetHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AddAttachmentsToSetRequest;
}


export class AddAttachmentsToSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addAttachmentsToSetResponse?: shared.AddAttachmentsToSetResponse;

  @SpeakeasyMetadata()
  attachmentLimitExceeded?: any;

  @SpeakeasyMetadata()
  attachmentSetExpired?: any;

  @SpeakeasyMetadata()
  attachmentSetIdNotFound?: any;

  @SpeakeasyMetadata()
  attachmentSetSizeLimitExceeded?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
