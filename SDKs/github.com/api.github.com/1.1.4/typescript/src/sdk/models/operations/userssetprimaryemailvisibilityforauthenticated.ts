import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBodyVisibilityEnum {
    Public = "public"
,    Private = "private"
}


export class UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=visibility" })
  visibility: UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBodyVisibilityEnum;
}


export class UsersSetPrimaryEmailVisibilityForAuthenticatedRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBody;
}


export class UsersSetPrimaryEmailVisibilityForAuthenticatedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.Email })
  emails?: shared.Email[];

  @Metadata()
  validationError?: shared.ValidationError;
}
