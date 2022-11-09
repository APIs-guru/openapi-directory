import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutModelPackageGroupPolicyInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ModelPackageGroupName" })
  modelPackageGroupName: string;

  @Metadata({ data: "json, name=ResourcePolicy" })
  resourcePolicy: string;
}
