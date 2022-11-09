import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListAllPadsUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=padIDs" })
  padIDs?: string[];
}


export class ListAllPadsUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: ListAllPadsUsingGet200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListAllPadsUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListAllPadsUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListAllPadsUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListAllPadsUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listAllPadsUsingGet200ApplicationJsonObject?: ListAllPadsUsingGet200ApplicationJson;

  @Metadata()
  listAllPadsUsingGet400ApplicationJsonObject?: ListAllPadsUsingGet400ApplicationJson;

  @Metadata()
  listAllPadsUsingGet401ApplicationJsonObject?: ListAllPadsUsingGet401ApplicationJson;

  @Metadata()
  listAllPadsUsingGet500ApplicationJsonObject?: ListAllPadsUsingGet500ApplicationJson;
}
