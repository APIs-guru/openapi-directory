import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeApiTokenBasic extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}
