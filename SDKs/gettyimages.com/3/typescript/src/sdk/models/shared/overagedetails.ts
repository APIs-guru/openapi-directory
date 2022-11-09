import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OverageDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=overages_reached" })
  overagesReached?: boolean;

  @Metadata({ data: "json, name=remaining" })
  remaining?: number;
}
