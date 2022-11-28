import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddTaskForSectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=section_gid" })
  sectionGid: string;
}


export class AddTaskForSectionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class AddTaskForSectionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.SectionTaskInsertRequest;
}


export class AddTaskForSection200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class AddTaskForSectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddTaskForSectionPathParams;

  @SpeakeasyMetadata()
  queryParams: AddTaskForSectionQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AddTaskForSectionRequestBody;
}


export class AddTaskForSectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addTaskForSection200ApplicationJsonObject?: AddTaskForSection200ApplicationJson;
}
