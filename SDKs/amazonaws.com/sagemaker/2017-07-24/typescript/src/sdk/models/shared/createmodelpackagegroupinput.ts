import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class CreateModelPackageGroupInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ModelPackageGroupDescription" })
  modelPackageGroupDescription?: string;

  @Metadata({ data: "json, name=ModelPackageGroupName" })
  modelPackageGroupName: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
