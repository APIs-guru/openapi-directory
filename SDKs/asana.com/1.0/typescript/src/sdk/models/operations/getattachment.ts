import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAttachmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attachment_gid" })
  attachmentGid: string;
}


export class GetAttachmentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetAttachment200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.AttachmentResponse;
}


export class GetAttachmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAttachmentPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAttachmentQueryParams;
}


export class GetAttachmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAttachment200ApplicationJsonObject?: GetAttachment200ApplicationJson;
}
