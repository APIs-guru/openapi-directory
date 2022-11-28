import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListSchemasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Schemas" })
  schemas?: string[];
}
