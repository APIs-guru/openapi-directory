import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGroupDiscussionsByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_id" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetGroupDiscussionsById200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=iconfarm" })
  iconfarm?: number;

  @SpeakeasyMetadata({ data: "json, name=iconserver" })
  iconserver?: number;

  @SpeakeasyMetadata({ data: "json, name=ispoolmoderated" })
  ispoolmoderated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lang" })
  lang?: string;

  @SpeakeasyMetadata({ data: "json, name=members" })
  members?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: number;

  @SpeakeasyMetadata({ data: "json, name=topics", elemType: shared.Topic })
  topics?: shared.Topic[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class GetGroupDiscussionsByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGroupDiscussionsByIdQueryParams;
}


export class GetGroupDiscussionsByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getGroupDiscussionsById200ApplicationJsonObject?: GetGroupDiscussionsById200ApplicationJson;
}
