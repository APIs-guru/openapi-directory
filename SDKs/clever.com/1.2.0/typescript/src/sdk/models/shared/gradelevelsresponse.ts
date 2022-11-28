import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GradeLevelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string[];
}
