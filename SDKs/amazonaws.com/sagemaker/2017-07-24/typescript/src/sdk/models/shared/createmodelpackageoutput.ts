import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateModelPackageOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ModelPackageArn" })
  modelPackageArn: string;
}
