import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FunctionsUpdateTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=functionId" })
  functionId: string;
}


export class FunctionsUpdateTagRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=tag" })
  tag: string;
}


export class FunctionsUpdateTagSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class FunctionsUpdateTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FunctionsUpdateTagPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: FunctionsUpdateTagRequestBody;

  @Metadata()
  security: FunctionsUpdateTagSecurity;
}


export class FunctionsUpdateTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  function?: shared.Function;
}
