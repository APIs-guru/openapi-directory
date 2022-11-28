import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeOauth2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class SchemeOauth2c extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}
