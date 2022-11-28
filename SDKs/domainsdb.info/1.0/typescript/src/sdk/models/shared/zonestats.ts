import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ZoneStatistics } from "./zonestatistics";



export class ZoneStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next_page" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=statistics", elemType: ZoneStatistics })
  statistics?: ZoneStatistics[];

  @SpeakeasyMetadata({ data: "json, name=time" })
  time: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
