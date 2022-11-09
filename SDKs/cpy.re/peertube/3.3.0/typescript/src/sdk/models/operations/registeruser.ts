import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegisterUserRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class RegisterUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
