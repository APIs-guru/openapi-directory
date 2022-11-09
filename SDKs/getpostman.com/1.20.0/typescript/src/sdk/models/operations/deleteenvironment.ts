import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteEnvironmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environment_uid" })
  environmentUid: string;
}


export class DeleteEnvironmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteEnvironmentPathParams;
}


export class DeleteEnvironment200ApplicationJsonEnvironment extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}


export class DeleteEnvironment200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=environment" })
  environment?: DeleteEnvironment200ApplicationJsonEnvironment;
}


export class DeleteEnvironment404ApplicationJsonError extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class DeleteEnvironment404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: DeleteEnvironment404ApplicationJsonError;
}


export class DeleteEnvironmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteEnvironment200ApplicationJsonObject?: DeleteEnvironment200ApplicationJson;

  @Metadata()
  deleteEnvironment404ApplicationJsonObject?: DeleteEnvironment404ApplicationJson;
}
