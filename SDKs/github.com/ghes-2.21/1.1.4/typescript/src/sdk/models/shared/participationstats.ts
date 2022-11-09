import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ParticipationStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=all" })
  all: number[];

  @Metadata({ data: "json, name=owner" })
  owner: number[];
}
