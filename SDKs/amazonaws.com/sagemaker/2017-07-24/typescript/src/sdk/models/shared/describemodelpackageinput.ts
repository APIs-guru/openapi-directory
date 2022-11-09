import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeModelPackageInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ModelPackageName" })
  modelPackageName: string;
}
