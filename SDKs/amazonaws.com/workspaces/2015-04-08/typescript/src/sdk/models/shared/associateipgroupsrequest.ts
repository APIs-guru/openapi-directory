import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateIpGroupsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @Metadata({ data: "json, name=GroupIds" })
  groupIds: string[];
}
