import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InviteMembersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emails" })
  emails: string[];

  @SpeakeasyMetadata({ data: "json, name=permissionGroupId" })
  permissionGroupId: number;
}
