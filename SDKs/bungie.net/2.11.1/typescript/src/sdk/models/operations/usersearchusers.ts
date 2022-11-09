import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserSearchUsersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;
}


export class UserSearchUsersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: UserSearchUsersQueryParams;
}


export class UserSearchUsersResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
