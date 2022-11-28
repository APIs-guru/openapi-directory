import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DraftPosition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abbreviation" })
  abbreviation?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
