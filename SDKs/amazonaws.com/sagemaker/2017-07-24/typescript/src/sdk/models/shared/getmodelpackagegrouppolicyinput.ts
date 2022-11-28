import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetModelPackageGroupPolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ModelPackageGroupName" })
  modelPackageGroupName: string;
}
