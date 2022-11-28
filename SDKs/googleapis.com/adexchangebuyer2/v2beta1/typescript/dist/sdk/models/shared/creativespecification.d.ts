import { SpeakeasyBase } from "../../../internal/utils";
import { AdSize } from "./adsize";
/**
 * Represents information for a creative that is associated with a Programmatic Guaranteed/Preferred Deal in Ad Manager.
**/
export declare class CreativeSpecification extends SpeakeasyBase {
    creativeCompanionSizes?: AdSize[];
    creativeSize?: AdSize;
}
