import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTagsForTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class GetTagsForTaskQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetTagsForTask200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.TagCompact })
  data?: shared.TagCompact[];
}


export class GetTagsForTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTagsForTaskPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTagsForTaskQueryParams;
}


export class GetTagsForTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTagsForTask200ApplicationJsonObject?: GetTagsForTask200ApplicationJson;
}
