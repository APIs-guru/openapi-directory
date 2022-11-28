import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Artist extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
