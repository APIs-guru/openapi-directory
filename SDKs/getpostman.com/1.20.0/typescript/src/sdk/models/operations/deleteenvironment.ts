import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteEnvironmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environment_uid" })
  environmentUid: string;
}


export class DeleteEnvironment200ApplicationJsonEnvironment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}


export class DeleteEnvironment200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: DeleteEnvironment200ApplicationJsonEnvironment;
}


export class DeleteEnvironment404ApplicationJsonError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class DeleteEnvironment404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: DeleteEnvironment404ApplicationJsonError;
}


export class DeleteEnvironmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteEnvironmentPathParams;
}


export class DeleteEnvironmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteEnvironment200ApplicationJsonObject?: DeleteEnvironment200ApplicationJson;

  @SpeakeasyMetadata()
  deleteEnvironment404ApplicationJsonObject?: DeleteEnvironment404ApplicationJson;
}
