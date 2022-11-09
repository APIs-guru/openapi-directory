import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FunctionsCreateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=events" })
  events?: string[];

  @Metadata({ data: "json, name=execute" })
  execute: string[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=runtime" })
  runtime: string;

  @Metadata({ data: "json, name=schedule" })
  schedule?: string;

  @Metadata({ data: "json, name=timeout" })
  timeout?: number;

  @Metadata({ data: "json, name=vars" })
  vars?: Map<string, any>;
}


export class FunctionsCreateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class FunctionsCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: FunctionsCreateRequestBody;

  @Metadata()
  security: FunctionsCreateSecurity;
}


export class FunctionsCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  function?: shared.Function;
}
