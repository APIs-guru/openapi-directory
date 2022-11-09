import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PadUsersCountUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class PadUsersCountUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PadUsersCountUsingPostQueryParams;
}


export class PadUsersCountUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=padUsersCount" })
  padUsersCount?: number;
}


export class PadUsersCountUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: PadUsersCountUsingPost200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersCountUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersCountUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersCountUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersCountUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  padUsersCountUsingPost200ApplicationJsonObject?: PadUsersCountUsingPost200ApplicationJson;

  @Metadata()
  padUsersCountUsingPost400ApplicationJsonObject?: PadUsersCountUsingPost400ApplicationJson;

  @Metadata()
  padUsersCountUsingPost401ApplicationJsonObject?: PadUsersCountUsingPost401ApplicationJson;

  @Metadata()
  padUsersCountUsingPost500ApplicationJsonObject?: PadUsersCountUsingPost500ApplicationJson;
}
