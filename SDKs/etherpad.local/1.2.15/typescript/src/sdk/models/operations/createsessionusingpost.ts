import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateSessionUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authorID" })
  authorId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=groupID" })
  groupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=validUntil" })
  validUntil?: string;
}


export class CreateSessionUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateSessionUsingPostQueryParams;
}


export class CreateSessionUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=sessionID" })
  sessionId?: string;
}


export class CreateSessionUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: CreateSessionUsingPost200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateSessionUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateSessionUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateSessionUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateSessionUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createSessionUsingPost200ApplicationJsonObject?: CreateSessionUsingPost200ApplicationJson;

  @Metadata()
  createSessionUsingPost400ApplicationJsonObject?: CreateSessionUsingPost400ApplicationJson;

  @Metadata()
  createSessionUsingPost401ApplicationJsonObject?: CreateSessionUsingPost401ApplicationJson;

  @Metadata()
  createSessionUsingPost500ApplicationJsonObject?: CreateSessionUsingPost500ApplicationJson;
}
