import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateSessionUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authorID" })
  authorId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupID" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validUntil" })
  validUntil?: string;
}


export class CreateSessionUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sessionID" })
  sessionId?: string;
}


export class CreateSessionUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: CreateSessionUsingPost200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateSessionUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateSessionUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateSessionUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateSessionUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreateSessionUsingPostQueryParams;
}


export class CreateSessionUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createSessionUsingPost200ApplicationJsonObject?: CreateSessionUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  createSessionUsingPost400ApplicationJsonObject?: CreateSessionUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  createSessionUsingPost401ApplicationJsonObject?: CreateSessionUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  createSessionUsingPost500ApplicationJsonObject?: CreateSessionUsingPost500ApplicationJson;
}
