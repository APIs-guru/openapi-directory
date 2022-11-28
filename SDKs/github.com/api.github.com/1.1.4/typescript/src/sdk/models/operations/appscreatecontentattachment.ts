import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppsCreateContentAttachmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=content_reference_id" })
  contentReferenceId: number;
}


export class AppsCreateContentAttachmentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}


export class AppsCreateContentAttachment415ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class AppsCreateContentAttachmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppsCreateContentAttachmentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: AppsCreateContentAttachmentRequestBody;
}


export class AppsCreateContentAttachmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  appsCreateContentAttachment415ApplicationJsonObject?: AppsCreateContentAttachment415ApplicationJson;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  contentReferenceAttachment?: shared.ContentReferenceAttachment;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
