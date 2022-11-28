import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutModelPackageGroupPolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ModelPackageGroupName" })
  modelPackageGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=ResourcePolicy" })
  resourcePolicy: string;
}
