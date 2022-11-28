import { SpeakeasyBase } from "../../../internal/utils";
import { Cycle } from "./cycle";
import { Metric } from "./metric";
/**
 * A complex type that defines a seller profile.
**/
export declare class StandardsProfile extends SpeakeasyBase {
    cycle?: Cycle;
    defaultProgram?: boolean;
    evaluationReason?: string;
    metrics?: Metric[];
    program?: string;
    standardsLevel?: string;
}
