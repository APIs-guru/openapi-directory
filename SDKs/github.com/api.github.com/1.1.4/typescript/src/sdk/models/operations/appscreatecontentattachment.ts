import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppsCreateContentAttachmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=content_reference_id" })
  contentReferenceId: number;
}


export class AppsCreateContentAttachmentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;

  @Metadata({ data: "json, name=title" })
  title: string;
}


export class AppsCreateContentAttachmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppsCreateContentAttachmentPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: AppsCreateContentAttachmentRequestBody;
}


export class AppsCreateContentAttachment415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class AppsCreateContentAttachmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  appsCreateContentAttachment415ApplicationJsonObject?: AppsCreateContentAttachment415ApplicationJson;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  contentReferenceAttachment?: shared.ContentReferenceAttachment;

  @Metadata()
  validationError?: shared.ValidationError;
}
