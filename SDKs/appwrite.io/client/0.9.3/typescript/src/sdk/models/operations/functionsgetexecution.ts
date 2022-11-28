import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FunctionsGetExecutionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=executionId" })
  executionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=functionId" })
  functionId: string;
}


export class FunctionsGetExecutionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class FunctionsGetExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FunctionsGetExecutionPathParams;

  @SpeakeasyMetadata()
  security: FunctionsGetExecutionSecurity;
}


export class FunctionsGetExecutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  execution?: shared.Execution;
}
