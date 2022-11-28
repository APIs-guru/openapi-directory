import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VerifyUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VerifyUserRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isPendingEmail" })
  isPendingEmail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=verificationString" })
  verificationString: string;
}


export class VerifyUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VerifyUserPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: VerifyUserRequestBody;
}


export class VerifyUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
