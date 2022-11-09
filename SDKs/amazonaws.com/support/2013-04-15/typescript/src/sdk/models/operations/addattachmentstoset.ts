import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AddAttachmentsToSetXAmzTargetEnum {
    AwsSupport20130415AddAttachmentsToSet = "AWSSupport_20130415.AddAttachmentsToSet"
}


export class AddAttachmentsToSetHeaders extends SpeakeasyBase {
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
  xAmzTarget: AddAttachmentsToSetXAmzTargetEnum;
}


export class AddAttachmentsToSetRequest extends SpeakeasyBase {
  @Metadata()
  headers: AddAttachmentsToSetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AddAttachmentsToSetRequest;
}


export class AddAttachmentsToSetResponse extends SpeakeasyBase {
  @Metadata()
  addAttachmentsToSetResponse?: shared.AddAttachmentsToSetResponse;

  @Metadata()
  attachmentLimitExceeded?: any;

  @Metadata()
  attachmentSetExpired?: any;

  @Metadata()
  attachmentSetIdNotFound?: any;

  @Metadata()
  attachmentSetSizeLimitExceeded?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
