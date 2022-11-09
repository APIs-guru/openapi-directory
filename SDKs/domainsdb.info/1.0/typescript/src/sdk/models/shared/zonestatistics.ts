import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ZoneStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date: Date;

  @Metadata({ data: "json, name=dec" })
  dec: number;

  @Metadata({ data: "json, name=inc" })
  inc: number;

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=zone" })
  zone: string;
}
