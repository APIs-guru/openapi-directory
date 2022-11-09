import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostConfigurationsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class PostConfigurationsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostConfigurationsRequestBody;
}


export class PostConfigurations201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=ok" })
  ok?: boolean;

  @Metadata({ data: "json, name=result" })
  result?: Map<string, any>;
}


export class PostConfigurationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  postConfigurations201ApplicationJsonObject?: PostConfigurations201ApplicationJson;
}
