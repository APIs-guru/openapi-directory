import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProtectionGroup } from "./protectiongroup";


export class ListProtectionGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ProtectionGroups", elemType: shared.ProtectionGroup })
  protectionGroups: ProtectionGroup[];
}
