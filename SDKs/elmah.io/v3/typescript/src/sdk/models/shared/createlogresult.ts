import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateLogResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;
}
