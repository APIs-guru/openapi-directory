import { SpeakeasyBase } from "../../../internal/utils";
import { AttackSummary } from "./attacksummary";
export declare class ListAttacksResponse extends SpeakeasyBase {
    attackSummaries?: AttackSummary[];
    nextToken?: string;
}
