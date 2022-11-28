import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteModelPackageGroupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ModelPackageGroupName" })
  modelPackageGroupName: string;
}
