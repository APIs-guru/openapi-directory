import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSchemaRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=schemaArn" })
  schemaArn: string;
}
