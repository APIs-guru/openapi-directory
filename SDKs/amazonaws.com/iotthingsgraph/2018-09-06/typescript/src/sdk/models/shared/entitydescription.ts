import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DefinitionDocument } from "./definitiondocument";
import { EntityTypeEnum } from "./entitytypeenum";


// EntityDescription
/** 
 * Describes the properties of an entity.
**/
export class EntityDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=definition" })
  definition?: DefinitionDocument;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: EntityTypeEnum;
}
