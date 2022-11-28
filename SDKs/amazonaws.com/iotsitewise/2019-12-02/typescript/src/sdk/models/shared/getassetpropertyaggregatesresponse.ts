import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AggregatedValue } from "./aggregatedvalue";



export class GetAssetPropertyAggregatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregatedValues", elemType: AggregatedValue })
  aggregatedValues: AggregatedValue[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
