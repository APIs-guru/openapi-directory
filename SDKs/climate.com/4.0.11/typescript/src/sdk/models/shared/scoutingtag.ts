import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ScoutingTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;
}
