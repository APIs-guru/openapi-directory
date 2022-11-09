import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateSchemaResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=schemaArn" })
  schemaArn?: string;
}
