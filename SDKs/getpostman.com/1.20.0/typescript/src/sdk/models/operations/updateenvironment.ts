import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateEnvironmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environment_uid" })
  environmentUid: string;
}


export class UpdateEnvironmentRequestBodyEnvironmentValues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class UpdateEnvironmentRequestBodyEnvironment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=values", elemType: UpdateEnvironmentRequestBodyEnvironmentValues })
  values?: UpdateEnvironmentRequestBodyEnvironmentValues[];
}


export class UpdateEnvironmentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: UpdateEnvironmentRequestBodyEnvironment;
}


export class UpdateEnvironment200ApplicationJsonEnvironment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}


export class UpdateEnvironment200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: UpdateEnvironment200ApplicationJsonEnvironment;
}


export class UpdateEnvironment400ApplicationJsonError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateEnvironment400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: UpdateEnvironment400ApplicationJsonError;
}


export class UpdateEnvironmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateEnvironmentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateEnvironmentRequestBody;
}


export class UpdateEnvironmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateEnvironment200ApplicationJsonObject?: UpdateEnvironment200ApplicationJson;

  @SpeakeasyMetadata()
  updateEnvironment400ApplicationJsonObject?: UpdateEnvironment400ApplicationJson;
}
