import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PolicyTypeEnum } from "./policytypeenum";


export class DisablePolicyTypeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=PolicyType" })
  policyType: PolicyTypeEnum;

  @Metadata({ data: "json, name=RootId" })
  rootId: string;
}
