import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyDefinitionsCommonDestinyIconSequenceDefinition } from "./destinydefinitionscommondestinyiconsequencedefinition";
/**
 * Basic display properties on the entity, so you don't have to look up the definition to show basic results for the item.
**/
export declare class DestinyDefinitionsDestinyEntitySearchResultItemDisplayProperties extends SpeakeasyBase {
    description?: string;
    hasIcon?: boolean;
    highResIcon?: string;
    icon?: string;
    iconSequences?: DestinyDefinitionsCommonDestinyIconSequenceDefinition[];
    name?: string;
}
/**
 * An individual Destiny Entity returned from the entity search.
**/
export declare class DestinyDefinitionsDestinyEntitySearchResultItem extends SpeakeasyBase {
    displayProperties?: DestinyDefinitionsDestinyEntitySearchResultItemDisplayProperties;
    entityType?: string;
    hash?: number;
    weight?: number;
}
