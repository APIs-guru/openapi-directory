import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ParticipationStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=all" })
  all: number[];

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner: number[];
}
