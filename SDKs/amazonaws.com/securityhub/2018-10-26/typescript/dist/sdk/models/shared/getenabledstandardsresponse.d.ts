import { SpeakeasyBase } from "../../../internal/utils";
import { StandardsSubscription } from "./standardssubscription";
export declare class GetEnabledStandardsResponse extends SpeakeasyBase {
    nextToken?: string;
    standardsSubscriptions?: StandardsSubscription[];
}
