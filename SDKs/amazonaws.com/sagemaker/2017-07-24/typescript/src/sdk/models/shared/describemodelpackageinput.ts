import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeModelPackageInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ModelPackageName" })
  modelPackageName: string;
}
