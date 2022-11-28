import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteGroupUsersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteGroupUsersIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_id" })
  groupId: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId: number;
}


export class DeleteGroupUsersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteGroupUsersIdPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteGroupUsersIdQueryParams;
}


export class DeleteGroupUsersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
