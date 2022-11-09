import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListAllPadsUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=padIDs" })
  padIDs?: string[];
}


export class ListAllPadsUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: ListAllPadsUsingPost200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListAllPadsUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListAllPadsUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListAllPadsUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListAllPadsUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listAllPadsUsingPost200ApplicationJsonObject?: ListAllPadsUsingPost200ApplicationJson;

  @Metadata()
  listAllPadsUsingPost400ApplicationJsonObject?: ListAllPadsUsingPost400ApplicationJson;

  @Metadata()
  listAllPadsUsingPost401ApplicationJsonObject?: ListAllPadsUsingPost401ApplicationJson;

  @Metadata()
  listAllPadsUsingPost500ApplicationJsonObject?: ListAllPadsUsingPost500ApplicationJson;
}
