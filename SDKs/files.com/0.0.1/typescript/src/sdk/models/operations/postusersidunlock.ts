import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostUsersIdUnlockPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostUsersIdUnlockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostUsersIdUnlockPathParams;
}


export class PostUsersIdUnlockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
