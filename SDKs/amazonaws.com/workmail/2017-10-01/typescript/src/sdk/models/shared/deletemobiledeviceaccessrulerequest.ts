import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteMobileDeviceAccessRuleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MobileDeviceAccessRuleId" })
  mobileDeviceAccessRuleId: string;

  @Metadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
