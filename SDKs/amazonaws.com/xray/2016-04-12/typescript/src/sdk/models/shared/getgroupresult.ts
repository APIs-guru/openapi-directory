import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Group } from "./group";


export class GetGroupResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Group" })
  group?: Group;
}
