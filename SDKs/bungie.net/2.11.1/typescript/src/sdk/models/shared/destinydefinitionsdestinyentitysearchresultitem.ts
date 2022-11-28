import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyDefinitionsCommonDestinyIconSequenceDefinition } from "./destinydefinitionscommondestinyiconsequencedefinition";



// DestinyDefinitionsDestinyEntitySearchResultItemDisplayProperties
/** 
 * Basic display properties on the entity, so you don't have to look up the definition to show basic results for the item.
**/
export class DestinyDefinitionsDestinyEntitySearchResultItemDisplayProperties extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  hasIcon?: boolean;

  @SpeakeasyMetadata()
  highResIcon?: string;

  @SpeakeasyMetadata()
  icon?: string;

  @SpeakeasyMetadata({ elemType: DestinyDefinitionsCommonDestinyIconSequenceDefinition })
  iconSequences?: DestinyDefinitionsCommonDestinyIconSequenceDefinition[];

  @SpeakeasyMetadata()
  name?: string;
}


// DestinyDefinitionsDestinyEntitySearchResultItem
/** 
 * An individual Destiny Entity returned from the entity search.
**/
export class DestinyDefinitionsDestinyEntitySearchResultItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  displayProperties?: DestinyDefinitionsDestinyEntitySearchResultItemDisplayProperties;

  @SpeakeasyMetadata()
  entityType?: string;

  @SpeakeasyMetadata()
  hash?: number;

  @SpeakeasyMetadata()
  weight?: number;
}
