import { SpeakeasyBase } from "../../../internal/utils";
import { SummarizedCounter } from "./summarizedcounter";
import { AttackProperty } from "./attackproperty";
import { Mitigation } from "./mitigation";
import { SubResourceSummary } from "./subresourcesummary";
/**
 * The details of a DDoS attack.
**/
export declare class AttackDetail extends SpeakeasyBase {
    attackCounters?: SummarizedCounter[];
    attackId?: string;
    attackProperties?: AttackProperty[];
    endTime?: Date;
    mitigations?: Mitigation[];
    resourceArn?: string;
    startTime?: Date;
    subResources?: SubResourceSummary[];
}
