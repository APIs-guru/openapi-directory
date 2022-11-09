import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateSectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=section_gid" })
  sectionGid: string;
}


export class UpdateSectionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class UpdateSectionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.SectionRequest;
}


export class UpdateSectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateSectionPathParams;

  @Metadata()
  queryParams: UpdateSectionQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateSectionRequestBody;
}


export class UpdateSection200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.SectionResponse;
}


export class UpdateSectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateSection200ApplicationJsonObject?: UpdateSection200ApplicationJson;
}
