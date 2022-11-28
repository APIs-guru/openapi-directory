import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostProjectUsernameProjectSshKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum PostProjectUsernameProjectSshKeyContentTypeEnum {
    ApplicationJson = "application/json"
}


export class PostProjectUsernameProjectSshKeyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: PostProjectUsernameProjectSshKeyContentTypeEnum;
}


export class PostProjectUsernameProjectSshKeyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=private_key" })
  privateKey?: string;
}


export class PostProjectUsernameProjectSshKeyDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostProjectUsernameProjectSshKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostProjectUsernameProjectSshKeyPathParams;

  @SpeakeasyMetadata()
  headers: PostProjectUsernameProjectSshKeyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostProjectUsernameProjectSshKeyRequestBody;
}


export class PostProjectUsernameProjectSshKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postProjectUsernameProjectSshKeyDefaultApplicationJsonObject?: PostProjectUsernameProjectSshKeyDefaultApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
