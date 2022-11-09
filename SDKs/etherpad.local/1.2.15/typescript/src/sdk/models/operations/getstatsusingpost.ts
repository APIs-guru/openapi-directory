import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStatsUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetStatsUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetStatsUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetStatsUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetStatsUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getStatsUsingPost200ApplicationJsonObject?: GetStatsUsingPost200ApplicationJson;

  @Metadata()
  getStatsUsingPost400ApplicationJsonObject?: GetStatsUsingPost400ApplicationJson;

  @Metadata()
  getStatsUsingPost401ApplicationJsonObject?: GetStatsUsingPost401ApplicationJson;

  @Metadata()
  getStatsUsingPost500ApplicationJsonObject?: GetStatsUsingPost500ApplicationJson;
}
