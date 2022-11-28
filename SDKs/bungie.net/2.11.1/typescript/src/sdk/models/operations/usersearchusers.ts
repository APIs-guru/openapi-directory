import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserSearchUsersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;
}


export class UserSearchUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UserSearchUsersQueryParams;
}


export class UserSearchUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
