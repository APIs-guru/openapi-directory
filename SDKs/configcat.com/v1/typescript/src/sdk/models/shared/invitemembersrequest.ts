import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InviteMembersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=emails" })
  emails: string[];

  @Metadata({ data: "json, name=permissionGroupId" })
  permissionGroupId: number;
}
