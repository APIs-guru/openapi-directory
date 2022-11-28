import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ZoneStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date: Date;

  @SpeakeasyMetadata({ data: "json, name=dec" })
  dec: number;

  @SpeakeasyMetadata({ data: "json, name=inc" })
  inc: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone: string;
}
