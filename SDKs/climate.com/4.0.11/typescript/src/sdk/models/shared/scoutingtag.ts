import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScoutingTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;
}
