import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=section_gid" })
  sectionGid: string;
}


export class GetSectionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetSectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSectionPathParams;

  @Metadata()
  queryParams: GetSectionQueryParams;
}


export class GetSection200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.SectionResponse;
}


export class GetSectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getSection200ApplicationJsonObject?: GetSection200ApplicationJson;
}
