import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeAccountAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class SchemeProfileAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class SchemeResetPasswordAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=authorization" })
  apiKey: string;
}


export class SchemeVerifyEmailAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=authorization" })
  apiKey: string;
}
