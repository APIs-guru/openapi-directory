import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetSchemaSummary } from "./datasetschemasummary";



export class ListSchemasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=schemas", elemType: DatasetSchemaSummary })
  schemas?: DatasetSchemaSummary[];
}
