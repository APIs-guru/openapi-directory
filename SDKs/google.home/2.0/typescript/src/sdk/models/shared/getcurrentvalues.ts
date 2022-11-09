import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Getcurrentvalues extends SpeakeasyBase {
  @Metadata({ data: "json, name=endpoint_enabled" })
  endpointEnabled: boolean;

  @Metadata({ data: "json, name=hotword_enabled" })
  hotwordEnabled: boolean;
}
