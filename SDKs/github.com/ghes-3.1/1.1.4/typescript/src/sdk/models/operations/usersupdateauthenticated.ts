import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UsersUpdateAuthenticatedRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bio" })
  bio?: string;

  @SpeakeasyMetadata({ data: "json, name=blog" })
  blog?: string;

  @SpeakeasyMetadata({ data: "json, name=company" })
  company?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=hireable" })
  hireable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=twitter_username" })
  twitterUsername?: string;
}


export class UsersUpdateAuthenticatedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UsersUpdateAuthenticatedRequestBody;
}


export class UsersUpdateAuthenticatedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  privateUser?: shared.PrivateUser;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
