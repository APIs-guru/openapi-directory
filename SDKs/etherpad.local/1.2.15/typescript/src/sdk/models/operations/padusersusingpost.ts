import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PadUsersUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class PadUsersUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PadUsersUsingPostQueryParams;
}


export class PadUsersUsingPost200ApplicationJsonDataPadUsers extends SpeakeasyBase {
  @Metadata({ data: "json, name=colorId" })
  colorId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: number;
}


export class PadUsersUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=padUsers", elemType: operations.PadUsersUsingPost200ApplicationJsonDataPadUsers })
  padUsers?: PadUsersUsingPost200ApplicationJsonDataPadUsers[];
}


export class PadUsersUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: PadUsersUsingPost200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  padUsersUsingPost200ApplicationJsonObject?: PadUsersUsingPost200ApplicationJson;

  @Metadata()
  padUsersUsingPost400ApplicationJsonObject?: PadUsersUsingPost400ApplicationJson;

  @Metadata()
  padUsersUsingPost401ApplicationJsonObject?: PadUsersUsingPost401ApplicationJson;

  @Metadata()
  padUsersUsingPost500ApplicationJsonObject?: PadUsersUsingPost500ApplicationJson;
}
