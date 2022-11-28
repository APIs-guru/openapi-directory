import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This object is a container for common summary information about the entity. The summary doesn't contain the whole entity structure, but it does contain information common across all entities.
**/
export declare class EntitySummary extends SpeakeasyBase {
    entityArn?: string;
    entityId?: string;
    entityType?: string;
    lastModifiedDate?: string;
    name?: string;
    visibility?: string;
}
