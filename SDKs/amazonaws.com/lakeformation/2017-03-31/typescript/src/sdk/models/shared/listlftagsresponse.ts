import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LfTagPair } from "./lftagpair";


export class ListLfTagsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=LFTags", elemType: shared.LfTagPair })
  lfTags?: LfTagPair[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
