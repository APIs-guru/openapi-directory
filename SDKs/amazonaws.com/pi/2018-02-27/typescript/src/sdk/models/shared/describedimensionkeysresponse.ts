import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DimensionKeyDescription } from "./dimensionkeydescription";
import { ResponsePartitionKey } from "./responsepartitionkey";


export class DescribeDimensionKeysResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AlignedEndTime" })
  alignedEndTime?: Date;

  @Metadata({ data: "json, name=AlignedStartTime" })
  alignedStartTime?: Date;

  @Metadata({ data: "json, name=Keys", elemType: shared.DimensionKeyDescription })
  keys?: DimensionKeyDescription[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PartitionKeys", elemType: shared.ResponsePartitionKey })
  partitionKeys?: ResponsePartitionKey[];
}
