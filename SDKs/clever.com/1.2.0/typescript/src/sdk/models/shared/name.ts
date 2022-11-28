import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Name extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: string;

  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: string;

  @SpeakeasyMetadata({ data: "json, name=middle" })
  middle?: string;
}
