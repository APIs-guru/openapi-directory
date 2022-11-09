import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateSchemaRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=schema" })
  schema: string;
}
