import { SpeakeasyBase } from "../../../internal/utils";
import { OutcomeEnum } from "./outcomeenum";
import { StatusEnum } from "./statusenum";
export declare class BuildSummary extends SpeakeasyBase {
    addedAt?: Date;
    buildNum?: number;
    outcome?: OutcomeEnum;
    pushedAt?: Date;
    status?: StatusEnum;
    vcsRevision?: string;
}
