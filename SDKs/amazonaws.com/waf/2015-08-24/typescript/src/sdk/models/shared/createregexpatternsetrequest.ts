import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateRegexPatternSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
