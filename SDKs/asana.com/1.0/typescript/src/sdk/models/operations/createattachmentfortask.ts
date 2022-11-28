import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateAttachmentForTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class CreateAttachmentForTaskQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class CreateAttachmentForTask200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.AttachmentResponse;
}


export class CreateAttachmentForTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateAttachmentForTaskPathParams;

  @SpeakeasyMetadata()
  queryParams: CreateAttachmentForTaskQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: shared.AttachmentRequest;
}


export class CreateAttachmentForTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createAttachmentForTask200ApplicationJsonObject?: CreateAttachmentForTask200ApplicationJson;
}
