import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisassociateIpGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "json, name=GroupIds" })
  groupIds: string[];
}
