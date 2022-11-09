import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteGroupUsersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteGroupUsersIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=group_id" })
  groupId: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId: number;
}


export class DeleteGroupUsersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteGroupUsersIdPathParams;

  @Metadata()
  queryParams: DeleteGroupUsersIdQueryParams;
}


export class DeleteGroupUsersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
