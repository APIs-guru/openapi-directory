import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteAttachmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=attachment_gid" })
  attachmentGid: string;
}


export class DeleteAttachmentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class DeleteAttachmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAttachmentPathParams;

  @Metadata()
  queryParams: DeleteAttachmentQueryParams;
}


export class DeleteAttachment200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class DeleteAttachmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteAttachment200ApplicationJsonObject?: DeleteAttachment200ApplicationJson;
}
