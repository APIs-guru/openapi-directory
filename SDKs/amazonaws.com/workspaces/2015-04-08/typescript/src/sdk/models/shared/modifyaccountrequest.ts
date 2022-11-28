import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DedicatedTenancySupportEnumEnum } from "./dedicatedtenancysupportenumenum";



export class ModifyAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DedicatedTenancyManagementCidrRange" })
  dedicatedTenancyManagementCidrRange?: string;

  @SpeakeasyMetadata({ data: "json, name=DedicatedTenancySupport" })
  dedicatedTenancySupport?: DedicatedTenancySupportEnumEnum;
}
