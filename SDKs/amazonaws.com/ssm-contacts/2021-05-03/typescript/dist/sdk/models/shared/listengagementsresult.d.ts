import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Engagement } from "./engagement";
export declare class ListEngagementsResult extends SpeakeasyBase {
    engagements: Engagement[];
    nextToken?: string;
}
