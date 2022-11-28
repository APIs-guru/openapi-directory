import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeModelPackageGroupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ModelPackageGroupName" })
  modelPackageGroupName: string;
}
