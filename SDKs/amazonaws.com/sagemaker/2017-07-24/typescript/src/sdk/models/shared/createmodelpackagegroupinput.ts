import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class CreateModelPackageGroupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ModelPackageGroupDescription" })
  modelPackageGroupDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelPackageGroupName" })
  modelPackageGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
