import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddTaskForSectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=section_gid" })
  sectionGid: string;
}


export class AddTaskForSectionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class AddTaskForSectionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.SectionTaskInsertRequest;
}


export class AddTaskForSectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddTaskForSectionPathParams;

  @Metadata()
  queryParams: AddTaskForSectionQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: AddTaskForSectionRequestBody;
}


export class AddTaskForSection200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class AddTaskForSectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  addTaskForSection200ApplicationJsonObject?: AddTaskForSection200ApplicationJson;
}
