import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStatementResultRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
