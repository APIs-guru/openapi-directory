import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateSchemaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema: string;
}
