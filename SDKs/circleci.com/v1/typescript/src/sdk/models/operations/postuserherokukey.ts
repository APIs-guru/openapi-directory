import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostUserHerokuKey403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostUserHerokuKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postUserHerokuKey403ApplicationJsonObject?: PostUserHerokuKey403ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
