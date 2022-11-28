import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DedicatedTenancySupportResultEnumEnum } from "./dedicatedtenancysupportresultenumenum";
import { DedicatedTenancyModificationStateEnumEnum } from "./dedicatedtenancymodificationstateenumenum";



// AccountModification
/** 
 * Describes a modification to the configuration of Bring Your Own License (BYOL) for the specified account. 
**/
export class AccountModification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DedicatedTenancyManagementCidrRange" })
  dedicatedTenancyManagementCidrRange?: string;

  @SpeakeasyMetadata({ data: "json, name=DedicatedTenancySupport" })
  dedicatedTenancySupport?: DedicatedTenancySupportResultEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=ModificationState" })
  modificationState?: DedicatedTenancyModificationStateEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;
}
