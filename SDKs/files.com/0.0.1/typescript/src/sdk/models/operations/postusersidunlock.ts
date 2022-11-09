import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostUsersIdUnlockPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostUsersIdUnlockRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostUsersIdUnlockPathParams;
}


export class PostUsersIdUnlockResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
