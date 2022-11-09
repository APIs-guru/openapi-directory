import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tag_gid" })
  tagGid: string;
}


export class DeleteTagQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class DeleteTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteTagPathParams;

  @Metadata()
  queryParams: DeleteTagQueryParams;
}


export class DeleteTag200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class DeleteTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteTag200ApplicationJsonObject?: DeleteTag200ApplicationJson;
}
