import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteModelPackageInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ModelPackageName" })
  modelPackageName: string;
}
