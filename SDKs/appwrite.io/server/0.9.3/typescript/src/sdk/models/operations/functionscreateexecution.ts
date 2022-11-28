import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FunctionsCreateExecutionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=functionId" })
  functionId: string;
}


export class FunctionsCreateExecutionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;
}


export class FunctionsCreateExecutionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class FunctionsCreateExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FunctionsCreateExecutionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: FunctionsCreateExecutionRequestBody;

  @SpeakeasyMetadata()
  security: FunctionsCreateExecutionSecurity;
}


export class FunctionsCreateExecutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  execution?: shared.Execution;
}
