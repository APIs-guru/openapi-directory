import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for updating room's metadata
**/
export declare class UpdateRoomRequest extends SpeakeasyBase {
    name?: string;
    notes?: string;
    quota?: number;
    timestampCreation?: Date;
    timestampModification?: Date;
}
