import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteMobileDeviceAccessRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MobileDeviceAccessRuleId" })
  mobileDeviceAccessRuleId: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
