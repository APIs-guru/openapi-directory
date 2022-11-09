import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateModelPackageOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ModelPackageArn" })
  modelPackageArn: string;
}
