import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";



export class CreateGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Group" })
  group?: Group;
}
