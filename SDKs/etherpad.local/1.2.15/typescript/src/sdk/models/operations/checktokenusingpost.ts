import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CheckTokenUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CheckTokenUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CheckTokenUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CheckTokenUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CheckTokenUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  checkTokenUsingPost200ApplicationJsonObject?: CheckTokenUsingPost200ApplicationJson;

  @Metadata()
  checkTokenUsingPost400ApplicationJsonObject?: CheckTokenUsingPost400ApplicationJson;

  @Metadata()
  checkTokenUsingPost401ApplicationJsonObject?: CheckTokenUsingPost401ApplicationJson;

  @Metadata()
  checkTokenUsingPost500ApplicationJsonObject?: CheckTokenUsingPost500ApplicationJson;
}
