import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateEnvironmentRequestBodyEnvironmentValues extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class CreateEnvironmentRequestBodyEnvironment extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=values", elemType: operations.CreateEnvironmentRequestBodyEnvironmentValues })
  values?: CreateEnvironmentRequestBodyEnvironmentValues[];
}


export class CreateEnvironmentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=environment" })
  environment?: CreateEnvironmentRequestBodyEnvironment;
}


export class CreateEnvironmentRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateEnvironmentRequestBody;
}


export class CreateEnvironment200ApplicationJsonEnvironment extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}


export class CreateEnvironment200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=environment" })
  environment?: CreateEnvironment200ApplicationJsonEnvironment;
}


export class CreateEnvironment400ApplicationJsonError extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class CreateEnvironment400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: CreateEnvironment400ApplicationJsonError;
}


export class CreateEnvironmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createEnvironment200ApplicationJsonObject?: CreateEnvironment200ApplicationJson;

  @Metadata()
  createEnvironment400ApplicationJsonObject?: CreateEnvironment400ApplicationJson;
}
