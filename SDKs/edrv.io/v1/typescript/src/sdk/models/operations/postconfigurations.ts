import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostConfigurationsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class PostConfigurations201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok?: boolean;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: Map<string, any>;
}


export class PostConfigurationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostConfigurationsRequestBody;
}


export class PostConfigurationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postConfigurations201ApplicationJsonObject?: PostConfigurations201ApplicationJson;
}
