import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DispatchLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=energy" })
  energy?: number;

  @Metadata({ data: "json, name=location" })
  location?: Map<string, any>;
}
