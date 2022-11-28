import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAttachmentsForTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class GetAttachmentsForTaskQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetAttachmentsForTask200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.AttachmentCompact })
  data?: shared.AttachmentCompact[];
}


export class GetAttachmentsForTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAttachmentsForTaskPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAttachmentsForTaskQueryParams;
}


export class GetAttachmentsForTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAttachmentsForTask200ApplicationJsonObject?: GetAttachmentsForTask200ApplicationJson;
}
