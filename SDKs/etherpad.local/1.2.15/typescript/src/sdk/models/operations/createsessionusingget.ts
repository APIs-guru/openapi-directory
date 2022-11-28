import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateSessionUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authorID" })
  authorId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupID" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validUntil" })
  validUntil?: string;
}


export class CreateSessionUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sessionID" })
  sessionId?: string;
}


export class CreateSessionUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: CreateSessionUsingGet200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateSessionUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateSessionUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateSessionUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateSessionUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreateSessionUsingGetQueryParams;
}


export class CreateSessionUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createSessionUsingGet200ApplicationJsonObject?: CreateSessionUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  createSessionUsingGet400ApplicationJsonObject?: CreateSessionUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  createSessionUsingGet401ApplicationJsonObject?: CreateSessionUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  createSessionUsingGet500ApplicationJsonObject?: CreateSessionUsingGet500ApplicationJson;
}
