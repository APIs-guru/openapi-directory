import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateIpGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GroupId" })
  groupId?: string;
}
