import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListMobileDeviceAccessRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
