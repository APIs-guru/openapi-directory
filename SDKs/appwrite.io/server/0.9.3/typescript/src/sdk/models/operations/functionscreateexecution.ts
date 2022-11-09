import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FunctionsCreateExecutionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=functionId" })
  functionId: string;
}


export class FunctionsCreateExecutionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: string;
}


export class FunctionsCreateExecutionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class FunctionsCreateExecutionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FunctionsCreateExecutionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: FunctionsCreateExecutionRequestBody;

  @Metadata()
  security: FunctionsCreateExecutionSecurity;
}


export class FunctionsCreateExecutionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  execution?: shared.Execution;
}
