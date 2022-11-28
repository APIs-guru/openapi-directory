import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FunctionsCreateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=events" })
  events?: string[];

  @SpeakeasyMetadata({ data: "json, name=execute" })
  execute: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=runtime" })
  runtime: string;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: string;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: number;

  @SpeakeasyMetadata({ data: "json, name=vars" })
  vars?: Map<string, any>;
}


export class FunctionsCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class FunctionsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: FunctionsCreateRequestBody;

  @SpeakeasyMetadata()
  security: FunctionsCreateSecurity;
}


export class FunctionsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  function?: shared.Function;
}
