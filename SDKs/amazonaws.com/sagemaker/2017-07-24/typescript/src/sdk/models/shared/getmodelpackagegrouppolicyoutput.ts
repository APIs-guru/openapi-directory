import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetModelPackageGroupPolicyOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourcePolicy" })
  resourcePolicy: string;
}
