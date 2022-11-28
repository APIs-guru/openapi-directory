import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LfTagPair } from "./lftagpair";
import { ColumnLfTag } from "./columnlftag";



export class GetResourceLfTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LFTagOnDatabase", elemType: LfTagPair })
  lfTagOnDatabase?: LfTagPair[];

  @SpeakeasyMetadata({ data: "json, name=LFTagsOnColumns", elemType: ColumnLfTag })
  lfTagsOnColumns?: ColumnLfTag[];

  @SpeakeasyMetadata({ data: "json, name=LFTagsOnTable", elemType: LfTagPair })
  lfTagsOnTable?: LfTagPair[];
}
