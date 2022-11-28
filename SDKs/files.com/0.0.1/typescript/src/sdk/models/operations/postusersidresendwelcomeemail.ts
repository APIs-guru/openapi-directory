import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostUsersIdResendWelcomeEmailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostUsersIdResendWelcomeEmailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostUsersIdResendWelcomeEmailPathParams;
}


export class PostUsersIdResendWelcomeEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
