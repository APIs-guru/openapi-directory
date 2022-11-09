import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStatementResultRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
