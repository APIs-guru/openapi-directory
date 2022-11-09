import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DefinitionDocument } from "./definitiondocument";
import { EntityTypeEnum } from "./entitytypeenum";
/**
 * Describes the properties of an entity.
**/
export declare class EntityDescription extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    definition?: DefinitionDocument;
    id?: string;
    type?: EntityTypeEnum;
}
