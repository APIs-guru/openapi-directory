import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DedicatedTenancySupportResultEnumEnum } from "./dedicatedtenancysupportresultenumenum";
import { DedicatedTenancyModificationStateEnumEnum } from "./dedicatedtenancymodificationstateenumenum";


// AccountModification
/** 
 * Describes a modification to the configuration of Bring Your Own License (BYOL) for the specified account. 
**/
export class AccountModification extends SpeakeasyBase {
  @Metadata({ data: "json, name=DedicatedTenancyManagementCidrRange" })
  dedicatedTenancyManagementCidrRange?: string;

  @Metadata({ data: "json, name=DedicatedTenancySupport" })
  dedicatedTenancySupport?: DedicatedTenancySupportResultEnumEnum;

  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=ModificationState" })
  modificationState?: DedicatedTenancyModificationStateEnumEnum;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;
}
