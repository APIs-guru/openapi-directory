import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetSchema } from "./datasetschema";



export class DescribeSchemaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: DatasetSchema;
}
