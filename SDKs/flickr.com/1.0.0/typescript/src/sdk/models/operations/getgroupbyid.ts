import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGroupByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_id" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_path_alias" })
  groupPathAlias?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetGroupById200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: shared.Group;

  @SpeakeasyMetadata({ data: "json, name=stat" })
  stat?: string;
}


export class GetGroupByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGroupByIdQueryParams;
}


export class GetGroupByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getGroupById200ApplicationJsonObject?: GetGroupById200ApplicationJson;
}
