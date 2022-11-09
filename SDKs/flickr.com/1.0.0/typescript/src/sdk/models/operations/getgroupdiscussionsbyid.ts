import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetGroupDiscussionsByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=group_id" })
  groupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetGroupDiscussionsByIdRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGroupDiscussionsByIdQueryParams;
}


export class GetGroupDiscussionsById200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=iconfarm" })
  iconfarm?: number;

  @Metadata({ data: "json, name=iconserver" })
  iconserver?: number;

  @Metadata({ data: "json, name=ispoolmoderated" })
  ispoolmoderated?: boolean;

  @Metadata({ data: "json, name=lang" })
  lang?: string;

  @Metadata({ data: "json, name=members" })
  members?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=per_page" })
  perPage?: number;

  @Metadata({ data: "json, name=privacy" })
  privacy?: number;

  @Metadata({ data: "json, name=topics", elemType: shared.Topic })
  topics?: shared.Topic[];

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class GetGroupDiscussionsByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getGroupDiscussionsById200ApplicationJsonObject?: GetGroupDiscussionsById200ApplicationJson;
}
