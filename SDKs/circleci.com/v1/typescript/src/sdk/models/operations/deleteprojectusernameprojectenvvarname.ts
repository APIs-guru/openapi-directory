import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteProjectUsernameProjectEnvvarNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum DeleteProjectUsernameProjectEnvvarName200ApplicationJsonMessageEnum {
    Ok = "OK"
}


export class DeleteProjectUsernameProjectEnvvarName200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: DeleteProjectUsernameProjectEnvvarName200ApplicationJsonMessageEnum;
}


export class DeleteProjectUsernameProjectEnvvarNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteProjectUsernameProjectEnvvarNamePathParams;
}


export class DeleteProjectUsernameProjectEnvvarNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteProjectUsernameProjectEnvvarName200ApplicationJsonObject?: DeleteProjectUsernameProjectEnvvarName200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
