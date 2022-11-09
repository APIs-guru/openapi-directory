import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BlockActionBlockScopeEnum {
    BlockScopeUnspecified = "BLOCK_SCOPE_UNSPECIFIED"
,    BlockScopeWorkProfile = "BLOCK_SCOPE_WORK_PROFILE"
,    BlockScopeDevice = "BLOCK_SCOPE_DEVICE"
}


// BlockAction
/** 
 * An action to block access to apps and data on a fully managed device or in a work profile. This action also triggers a device or work profile to displays a user-facing notification with information (where possible) on how to correct the compliance issue. Note: wipeAction must also be specified.
**/
export class BlockAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=blockAfterDays" })
  blockAfterDays?: number;

  @Metadata({ data: "json, name=blockScope" })
  blockScope?: BlockActionBlockScopeEnum;
}
