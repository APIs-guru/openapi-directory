import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ZoneStatistics } from "./zonestatistics";


export class ZoneStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=next_page" })
  nextPage?: string;

  @Metadata({ data: "json, name=statistics", elemType: shared.ZoneStatistics })
  statistics?: ZoneStatistics[];

  @Metadata({ data: "json, name=time" })
  time: string;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
