import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetModelPackageGroupPolicyInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ModelPackageGroupName" })
  modelPackageGroupName: string;
}
