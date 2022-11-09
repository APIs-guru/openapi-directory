import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AggregatedValue } from "./aggregatedvalue";


export class GetAssetPropertyAggregatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregatedValues", elemType: shared.AggregatedValue })
  aggregatedValues: AggregatedValue[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
