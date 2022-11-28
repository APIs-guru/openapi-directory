import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Option } from "./option";



export class OptionGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowsVpcAndNonVpcInstanceMemberships?: boolean;

  @SpeakeasyMetadata()
  engineName?: string;

  @SpeakeasyMetadata()
  majorEngineVersion?: string;

  @SpeakeasyMetadata()
  optionGroupDescription?: string;

  @SpeakeasyMetadata()
  optionGroupName?: string;

  @SpeakeasyMetadata({ elemType: Option })
  options?: Option[];

  @SpeakeasyMetadata()
  vpcId?: string;
}
