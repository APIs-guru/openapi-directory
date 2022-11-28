import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateModelPackageOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ModelPackageArn" })
  modelPackageArn: string;
}
