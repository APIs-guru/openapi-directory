import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateModelPackageGroupOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ModelPackageGroupArn" })
  modelPackageGroupArn: string;
}
