import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostUsersId2faResetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostUsersId2faResetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostUsersId2faResetPathParams;
}


export class PostUsersId2faResetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
