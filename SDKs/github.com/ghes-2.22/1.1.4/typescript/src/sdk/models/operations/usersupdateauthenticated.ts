import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UsersUpdateAuthenticatedRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=bio" })
  bio?: string;

  @Metadata({ data: "json, name=blog" })
  blog?: string;

  @Metadata({ data: "json, name=company" })
  company?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=hireable" })
  hireable?: boolean;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=twitter_username" })
  twitterUsername?: string;
}


export class UsersUpdateAuthenticatedRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: UsersUpdateAuthenticatedRequestBody;
}


export class UsersUpdateAuthenticatedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  privateUser?: shared.PrivateUser;

  @Metadata()
  validationError?: shared.ValidationError;
}
