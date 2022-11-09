import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteProjectUsernameProjectEnvvarNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class DeleteProjectUsernameProjectEnvvarNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteProjectUsernameProjectEnvvarNamePathParams;
}

export enum DeleteProjectUsernameProjectEnvvarName200ApplicationJsonMessageEnum {
    Ok = "OK"
}


export class DeleteProjectUsernameProjectEnvvarName200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: DeleteProjectUsernameProjectEnvvarName200ApplicationJsonMessageEnum;
}


export class DeleteProjectUsernameProjectEnvvarNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteProjectUsernameProjectEnvvarName200ApplicationJsonObject?: DeleteProjectUsernameProjectEnvvarName200ApplicationJson;

  @Metadata()
  statusCode: number;
}
