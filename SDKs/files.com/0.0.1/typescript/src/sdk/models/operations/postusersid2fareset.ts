import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostUsersId2faResetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostUsersId2faResetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostUsersId2faResetPathParams;
}


export class PostUsersId2faResetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
