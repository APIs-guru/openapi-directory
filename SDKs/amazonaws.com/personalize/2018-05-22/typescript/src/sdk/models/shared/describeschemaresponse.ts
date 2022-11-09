import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DatasetSchema } from "./datasetschema";


export class DescribeSchemaResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=schema" })
  schema?: DatasetSchema;
}
