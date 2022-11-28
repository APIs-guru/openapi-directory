import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProtectionGroup } from "./protectiongroup";



export class ListProtectionGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ProtectionGroups", elemType: ProtectionGroup })
  protectionGroups: ProtectionGroup[];
}
