import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListAllPadsUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=padIDs" })
  padIDs?: string[];
}


export class ListAllPadsUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ListAllPadsUsingGet200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListAllPadsUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListAllPadsUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListAllPadsUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListAllPadsUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listAllPadsUsingGet200ApplicationJsonObject?: ListAllPadsUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  listAllPadsUsingGet400ApplicationJsonObject?: ListAllPadsUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  listAllPadsUsingGet401ApplicationJsonObject?: ListAllPadsUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  listAllPadsUsingGet500ApplicationJsonObject?: ListAllPadsUsingGet500ApplicationJson;
}
