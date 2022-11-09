import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetGroupByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=group_id" })
  groupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=group_path_alias" })
  groupPathAlias?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetGroupByIdRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGroupByIdQueryParams;
}


export class GetGroupById200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=group" })
  group?: shared.Group;

  @Metadata({ data: "json, name=stat" })
  stat?: string;
}


export class GetGroupByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getGroupById200ApplicationJsonObject?: GetGroupById200ApplicationJson;
}
