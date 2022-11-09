import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostUsersIdResendWelcomeEmailPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostUsersIdResendWelcomeEmailRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostUsersIdResendWelcomeEmailPathParams;
}


export class PostUsersIdResendWelcomeEmailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
