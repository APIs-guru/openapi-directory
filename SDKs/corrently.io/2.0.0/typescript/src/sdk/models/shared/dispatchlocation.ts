import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DispatchLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=energy" })
  energy?: number;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: Map<string, any>;
}
