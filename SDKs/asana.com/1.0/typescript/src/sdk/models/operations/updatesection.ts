import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=section_gid" })
  sectionGid: string;
}


export class UpdateSectionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class UpdateSectionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.SectionRequest;
}


export class UpdateSection200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.SectionResponse;
}


export class UpdateSectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSectionPathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateSectionQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateSectionRequestBody;
}


export class UpdateSectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateSection200ApplicationJsonObject?: UpdateSection200ApplicationJson;
}
