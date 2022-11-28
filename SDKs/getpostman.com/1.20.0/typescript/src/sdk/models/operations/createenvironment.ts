import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateEnvironmentRequestBodyEnvironmentValues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class CreateEnvironmentRequestBodyEnvironment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=values", elemType: CreateEnvironmentRequestBodyEnvironmentValues })
  values?: CreateEnvironmentRequestBodyEnvironmentValues[];
}


export class CreateEnvironmentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: CreateEnvironmentRequestBodyEnvironment;
}


export class CreateEnvironment200ApplicationJsonEnvironment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}


export class CreateEnvironment200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: CreateEnvironment200ApplicationJsonEnvironment;
}


export class CreateEnvironment400ApplicationJsonError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class CreateEnvironment400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: CreateEnvironment400ApplicationJsonError;
}


export class CreateEnvironmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateEnvironmentRequestBody;
}


export class CreateEnvironmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createEnvironment200ApplicationJsonObject?: CreateEnvironment200ApplicationJson;

  @SpeakeasyMetadata()
  createEnvironment400ApplicationJsonObject?: CreateEnvironment400ApplicationJson;
}
