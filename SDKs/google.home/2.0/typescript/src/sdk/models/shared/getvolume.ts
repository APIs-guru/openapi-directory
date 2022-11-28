import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Getvolume extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=volume" })
  volume: number;
}
