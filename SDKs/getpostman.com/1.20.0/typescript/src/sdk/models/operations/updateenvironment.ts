import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateEnvironmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environment_uid" })
  environmentUid: string;
}


export class UpdateEnvironmentRequestBodyEnvironmentValues extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class UpdateEnvironmentRequestBodyEnvironment extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=values", elemType: operations.UpdateEnvironmentRequestBodyEnvironmentValues })
  values?: UpdateEnvironmentRequestBodyEnvironmentValues[];
}


export class UpdateEnvironmentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=environment" })
  environment?: UpdateEnvironmentRequestBodyEnvironment;
}


export class UpdateEnvironmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateEnvironmentPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateEnvironmentRequestBody;
}


export class UpdateEnvironment200ApplicationJsonEnvironment extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}


export class UpdateEnvironment200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=environment" })
  environment?: UpdateEnvironment200ApplicationJsonEnvironment;
}


export class UpdateEnvironment400ApplicationJsonError extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateEnvironment400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: UpdateEnvironment400ApplicationJsonError;
}


export class UpdateEnvironmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateEnvironment200ApplicationJsonObject?: UpdateEnvironment200ApplicationJson;

  @Metadata()
  updateEnvironment400ApplicationJsonObject?: UpdateEnvironment400ApplicationJson;
}
