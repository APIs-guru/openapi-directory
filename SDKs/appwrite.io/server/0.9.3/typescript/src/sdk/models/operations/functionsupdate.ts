import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FunctionsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=functionId" })
  functionId: string;
}


export class FunctionsUpdateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=events" })
  events?: string[];

  @Metadata({ data: "json, name=execute" })
  execute: string[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=schedule" })
  schedule?: string;

  @Metadata({ data: "json, name=timeout" })
  timeout?: number;

  @Metadata({ data: "json, name=vars" })
  vars?: Map<string, any>;
}


export class FunctionsUpdateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class FunctionsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FunctionsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: FunctionsUpdateRequestBody;

  @Metadata()
  security: FunctionsUpdateSecurity;
}


export class FunctionsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  function?: shared.Function;
}
