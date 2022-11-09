import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatasetSchemaSummary } from "./datasetschemasummary";


export class ListSchemasResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=schemas", elemType: shared.DatasetSchemaSummary })
  schemas?: DatasetSchemaSummary[];
}
