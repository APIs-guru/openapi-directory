import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostProjectUsernameProjectSshKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum PostProjectUsernameProjectSshKeyContentTypeEnum {
    ApplicationJson = "application/json"
}


export class PostProjectUsernameProjectSshKeyHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: PostProjectUsernameProjectSshKeyContentTypeEnum;
}


export class PostProjectUsernameProjectSshKeyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=private_key" })
  privateKey?: string;
}


export class PostProjectUsernameProjectSshKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostProjectUsernameProjectSshKeyPathParams;

  @Metadata()
  headers: PostProjectUsernameProjectSshKeyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PostProjectUsernameProjectSshKeyRequestBody;
}


export class PostProjectUsernameProjectSshKeyDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostProjectUsernameProjectSshKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postProjectUsernameProjectSshKeyDefaultApplicationJsonObject?: PostProjectUsernameProjectSshKeyDefaultApplicationJson;

  @Metadata()
  statusCode: number;
}
