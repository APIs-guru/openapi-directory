import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Getcurrentvalues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpoint_enabled" })
  endpointEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=hotword_enabled" })
  hotwordEnabled: boolean;
}
