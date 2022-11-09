import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateGroupPadUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=groupID" })
  groupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=padName" })
  padName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;
}


export class CreateGroupPadUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateGroupPadUsingPostQueryParams;
}


export class CreateGroupPadUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupPadUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupPadUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupPadUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupPadUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createGroupPadUsingPost200ApplicationJsonObject?: CreateGroupPadUsingPost200ApplicationJson;

  @Metadata()
  createGroupPadUsingPost400ApplicationJsonObject?: CreateGroupPadUsingPost400ApplicationJson;

  @Metadata()
  createGroupPadUsingPost401ApplicationJsonObject?: CreateGroupPadUsingPost401ApplicationJson;

  @Metadata()
  createGroupPadUsingPost500ApplicationJsonObject?: CreateGroupPadUsingPost500ApplicationJson;
}
