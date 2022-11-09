import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DedicatedTenancySupportResultEnumEnum } from "./dedicatedtenancysupportresultenumenum";


export class DescribeAccountResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=DedicatedTenancyManagementCidrRange" })
  dedicatedTenancyManagementCidrRange?: string;

  @Metadata({ data: "json, name=DedicatedTenancySupport" })
  dedicatedTenancySupport?: DedicatedTenancySupportResultEnumEnum;
}
