import { SpeakeasyBase } from "../../../internal/utils";
import { AggregatedValue } from "./aggregatedvalue";
export declare class GetAssetPropertyAggregatesResponse extends SpeakeasyBase {
    aggregatedValues: AggregatedValue[];
    nextToken?: string;
}
