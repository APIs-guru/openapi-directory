import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FunctionsCreateTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=functionId" })
  functionId: string;
}


export class FunctionsCreateTagRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=code" })
  code: string;

  @Metadata({ data: "multipart_form, name=command" })
  command: string;
}


export class FunctionsCreateTagSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class FunctionsCreateTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FunctionsCreateTagPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: FunctionsCreateTagRequestBody;

  @Metadata()
  security: FunctionsCreateTagSecurity;
}


export class FunctionsCreateTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tag?: shared.Tag;
}
