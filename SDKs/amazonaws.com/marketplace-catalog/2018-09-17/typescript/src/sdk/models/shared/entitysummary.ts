import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EntitySummary
/** 
 * This object is a container for common summary information about the entity. The summary doesn't contain the whole entity structure, but it does contain information common across all entities.
**/
export class EntitySummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=EntityArn" })
  entityArn?: string;

  @Metadata({ data: "json, name=EntityId" })
  entityId?: string;

  @Metadata({ data: "json, name=EntityType" })
  entityType?: string;

  @Metadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Visibility" })
  visibility?: string;
}
