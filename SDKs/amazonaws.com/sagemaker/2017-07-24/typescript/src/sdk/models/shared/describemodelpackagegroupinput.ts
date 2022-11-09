import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeModelPackageGroupInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ModelPackageGroupName" })
  modelPackageGroupName: string;
}
