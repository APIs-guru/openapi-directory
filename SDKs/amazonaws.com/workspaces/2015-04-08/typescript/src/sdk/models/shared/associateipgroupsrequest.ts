import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateIpGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "json, name=GroupIds" })
  groupIds: string[];
}
