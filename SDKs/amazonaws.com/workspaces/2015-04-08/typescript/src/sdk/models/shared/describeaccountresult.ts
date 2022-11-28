import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DedicatedTenancySupportResultEnumEnum } from "./dedicatedtenancysupportresultenumenum";



export class DescribeAccountResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DedicatedTenancyManagementCidrRange" })
  dedicatedTenancyManagementCidrRange?: string;

  @SpeakeasyMetadata({ data: "json, name=DedicatedTenancySupport" })
  dedicatedTenancySupport?: DedicatedTenancySupportResultEnumEnum;
}
