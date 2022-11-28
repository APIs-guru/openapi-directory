import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OptionGroupMembership extends SpeakeasyBase {
  @SpeakeasyMetadata()
  optionGroupName?: string;

  @SpeakeasyMetadata()
  status?: string;
}
