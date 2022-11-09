import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VerifyUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VerifyUserRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=isPendingEmail" })
  isPendingEmail?: boolean;

  @Metadata({ data: "json, name=verificationString" })
  verificationString: string;
}


export class VerifyUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VerifyUserPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: VerifyUserRequestBody;
}


export class VerifyUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
