import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EntitySummary
/** 
 * This object is a container for common summary information about the entity. The summary doesn't contain the whole entity structure, but it does contain information common across all entities.
**/
export class EntitySummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EntityArn" })
  entityArn?: string;

  @SpeakeasyMetadata({ data: "json, name=EntityId" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=EntityType" })
  entityType?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Visibility" })
  visibility?: string;
}
