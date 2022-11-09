import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReactionRollup extends SpeakeasyBase {
  @Metadata({ data: "json, name=+1" })
  plus1: number;

  @Metadata({ data: "json, name=-1" })
  minus1: number;

  @Metadata({ data: "json, name=confused" })
  confused: number;

  @Metadata({ data: "json, name=eyes" })
  eyes: number;

  @Metadata({ data: "json, name=heart" })
  heart: number;

  @Metadata({ data: "json, name=hooray" })
  hooray: number;

  @Metadata({ data: "json, name=laugh" })
  laugh: number;

  @Metadata({ data: "json, name=rocket" })
  rocket: number;

  @Metadata({ data: "json, name=total_count" })
  totalCount: number;

  @Metadata({ data: "json, name=url" })
  url: string;
}
