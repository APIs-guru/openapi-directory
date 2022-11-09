import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CancelStatementRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id: string;
}
