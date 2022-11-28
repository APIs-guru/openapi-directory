import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";



export class GetGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Group" })
  group?: Group;
}
