import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyTypeEnum } from "./policytypeenum";



export class DisablePolicyTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PolicyType" })
  policyType: PolicyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=RootId" })
  rootId: string;
}
