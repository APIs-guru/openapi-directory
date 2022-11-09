import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=lat" })
  lat?: string;

  @Metadata({ data: "json, name=lon" })
  lon?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=zip" })
  zip?: string;
}
