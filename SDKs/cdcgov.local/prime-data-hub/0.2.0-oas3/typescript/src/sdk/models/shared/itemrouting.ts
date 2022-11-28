import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItemRouting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinations" })
  destinations?: string[];

  @SpeakeasyMetadata({ data: "json, name=reportIndex" })
  reportIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=trackingId" })
  trackingId?: string;
}
