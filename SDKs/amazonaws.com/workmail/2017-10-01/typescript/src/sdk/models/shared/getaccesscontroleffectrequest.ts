import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAccessControlEffectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action" })
  action: string;

  @SpeakeasyMetadata({ data: "json, name=IpAddress" })
  ipAddress: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationId" })
  organizationId: string;

  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId: string;
}
