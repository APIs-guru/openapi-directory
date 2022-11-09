import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAccessControlEffectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action" })
  action: string;

  @Metadata({ data: "json, name=IpAddress" })
  ipAddress: string;

  @Metadata({ data: "json, name=OrganizationId" })
  organizationId: string;

  @Metadata({ data: "json, name=UserId" })
  userId: string;
}
