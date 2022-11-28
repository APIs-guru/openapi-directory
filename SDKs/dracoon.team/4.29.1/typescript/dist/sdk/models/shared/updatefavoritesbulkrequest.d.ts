import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for updating favorites
**/
export declare class UpdateFavoritesBulkRequest extends SpeakeasyBase {
    isFavorite: boolean;
    objectIds: number[];
}
