import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStatsUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetStatsUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetStatsUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetStatsUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetStatsUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getStatsUsingGet200ApplicationJsonObject?: GetStatsUsingGet200ApplicationJson;

  @Metadata()
  getStatsUsingGet400ApplicationJsonObject?: GetStatsUsingGet400ApplicationJson;

  @Metadata()
  getStatsUsingGet401ApplicationJsonObject?: GetStatsUsingGet401ApplicationJson;

  @Metadata()
  getStatsUsingGet500ApplicationJsonObject?: GetStatsUsingGet500ApplicationJson;
}
