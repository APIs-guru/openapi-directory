import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSchemaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=schemaArn" })
  schemaArn: string;
}
