import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItemRouting extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinations" })
  destinations?: string[];

  @Metadata({ data: "json, name=reportIndex" })
  reportIndex?: number;

  @Metadata({ data: "json, name=trackingId" })
  trackingId?: string;
}
