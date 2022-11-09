import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LocationEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=state_province" })
  stateProvince?: string;

  @Metadata({ data: "json, name=venue" })
  venue?: string;
}
