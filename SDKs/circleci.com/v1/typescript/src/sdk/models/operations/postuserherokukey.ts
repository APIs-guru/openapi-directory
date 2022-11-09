import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostUserHerokuKey403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostUserHerokuKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postUserHerokuKey403ApplicationJsonObject?: PostUserHerokuKey403ApplicationJson;

  @Metadata()
  statusCode: number;
}
