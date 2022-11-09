import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeAccountAuth extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class SchemeProfileAuth extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class SchemeResetPasswordAuth extends SpeakeasyBase {
  @Metadata({ data: "security, name=authorization" })
  apiKey: string;
}


export class SchemeVerifyEmailAuth extends SpeakeasyBase {
  @Metadata({ data: "security, name=authorization" })
  apiKey: string;
}
