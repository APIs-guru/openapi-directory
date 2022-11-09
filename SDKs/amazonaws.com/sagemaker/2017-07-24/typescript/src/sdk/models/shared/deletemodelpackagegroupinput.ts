import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteModelPackageGroupInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ModelPackageGroupName" })
  modelPackageGroupName: string;
}
