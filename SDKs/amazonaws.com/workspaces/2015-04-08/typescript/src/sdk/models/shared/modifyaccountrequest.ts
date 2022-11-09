import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DedicatedTenancySupportEnumEnum } from "./dedicatedtenancysupportenumenum";


export class ModifyAccountRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DedicatedTenancyManagementCidrRange" })
  dedicatedTenancyManagementCidrRange?: string;

  @Metadata({ data: "json, name=DedicatedTenancySupport" })
  dedicatedTenancySupport?: DedicatedTenancySupportEnumEnum;
}
