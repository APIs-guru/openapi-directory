import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeOauth2 extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}
