import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateAttachmentForTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class CreateAttachmentForTaskQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class CreateAttachmentForTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateAttachmentForTaskPathParams;

  @Metadata()
  queryParams: CreateAttachmentForTaskQueryParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: shared.AttachmentRequest;
}


export class CreateAttachmentForTask200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.AttachmentResponse;
}


export class CreateAttachmentForTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  createAttachmentForTask200ApplicationJsonObject?: CreateAttachmentForTask200ApplicationJson;
}
