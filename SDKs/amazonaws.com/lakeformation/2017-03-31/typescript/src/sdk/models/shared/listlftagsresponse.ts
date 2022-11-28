import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LfTagPair } from "./lftagpair";



export class ListLfTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LFTags", elemType: LfTagPair })
  lfTags?: LfTagPair[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
