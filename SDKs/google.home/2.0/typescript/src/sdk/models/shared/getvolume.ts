import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Getvolume extends SpeakeasyBase {
  @Metadata({ data: "json, name=volume" })
  volume: number;
}
