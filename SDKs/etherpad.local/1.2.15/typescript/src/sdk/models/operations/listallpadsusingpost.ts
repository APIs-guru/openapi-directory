import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListAllPadsUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=padIDs" })
  padIDs?: string[];
}


export class ListAllPadsUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ListAllPadsUsingPost200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListAllPadsUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListAllPadsUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListAllPadsUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListAllPadsUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listAllPadsUsingPost200ApplicationJsonObject?: ListAllPadsUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  listAllPadsUsingPost400ApplicationJsonObject?: ListAllPadsUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  listAllPadsUsingPost401ApplicationJsonObject?: ListAllPadsUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  listAllPadsUsingPost500ApplicationJsonObject?: ListAllPadsUsingPost500ApplicationJson;
}
