import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionKeyDescription } from "./dimensionkeydescription";
import { ResponsePartitionKey } from "./responsepartitionkey";



export class DescribeDimensionKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AlignedEndTime" })
  alignedEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=AlignedStartTime" })
  alignedStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Keys", elemType: DimensionKeyDescription })
  keys?: DimensionKeyDescription[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PartitionKeys", elemType: ResponsePartitionKey })
  partitionKeys?: ResponsePartitionKey[];
}
