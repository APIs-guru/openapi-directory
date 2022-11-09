import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateGroupPadUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=groupID" })
  groupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=padName" })
  padName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;
}


export class CreateGroupPadUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateGroupPadUsingGetQueryParams;
}


export class CreateGroupPadUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupPadUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupPadUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupPadUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateGroupPadUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createGroupPadUsingGet200ApplicationJsonObject?: CreateGroupPadUsingGet200ApplicationJson;

  @Metadata()
  createGroupPadUsingGet400ApplicationJsonObject?: CreateGroupPadUsingGet400ApplicationJson;

  @Metadata()
  createGroupPadUsingGet401ApplicationJsonObject?: CreateGroupPadUsingGet401ApplicationJson;

  @Metadata()
  createGroupPadUsingGet500ApplicationJsonObject?: CreateGroupPadUsingGet500ApplicationJson;
}
