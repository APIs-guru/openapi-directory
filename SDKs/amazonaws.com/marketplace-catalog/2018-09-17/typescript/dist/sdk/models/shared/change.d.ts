import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Entity } from "./entity";
/**
 * An object that contains the <code>ChangeType</code>, <code>Details</code>, and <code>Entity</code>.
**/
export declare class Change extends SpeakeasyBase {
    changeName?: string;
    changeType: string;
    details: string;
    entity: Entity;
}
