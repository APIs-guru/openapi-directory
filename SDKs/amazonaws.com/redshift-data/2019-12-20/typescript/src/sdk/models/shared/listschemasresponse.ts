import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListSchemasResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Schemas" })
  schemas?: string[];
}
