import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAttachmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=attachment_gid" })
  attachmentGid: string;
}


export class GetAttachmentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetAttachmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAttachmentPathParams;

  @Metadata()
  queryParams: GetAttachmentQueryParams;
}


export class GetAttachment200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.AttachmentResponse;
}


export class GetAttachmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAttachment200ApplicationJsonObject?: GetAttachment200ApplicationJson;
}
