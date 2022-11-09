import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CheckTokenUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CheckTokenUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CheckTokenUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CheckTokenUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CheckTokenUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  checkTokenUsingGet200ApplicationJsonObject?: CheckTokenUsingGet200ApplicationJson;

  @Metadata()
  checkTokenUsingGet400ApplicationJsonObject?: CheckTokenUsingGet400ApplicationJson;

  @Metadata()
  checkTokenUsingGet401ApplicationJsonObject?: CheckTokenUsingGet401ApplicationJson;

  @Metadata()
  checkTokenUsingGet500ApplicationJsonObject?: CheckTokenUsingGet500ApplicationJson;
}
