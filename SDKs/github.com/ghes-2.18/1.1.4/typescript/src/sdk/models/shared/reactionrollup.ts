import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReactionRollup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=+1" })
  plus1: number;

  @SpeakeasyMetadata({ data: "json, name=-1" })
  minus1: number;

  @SpeakeasyMetadata({ data: "json, name=confused" })
  confused: number;

  @SpeakeasyMetadata({ data: "json, name=eyes" })
  eyes: number;

  @SpeakeasyMetadata({ data: "json, name=heart" })
  heart: number;

  @SpeakeasyMetadata({ data: "json, name=hooray" })
  hooray: number;

  @SpeakeasyMetadata({ data: "json, name=laugh" })
  laugh: number;

  @SpeakeasyMetadata({ data: "json, name=rocket" })
  rocket: number;

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
