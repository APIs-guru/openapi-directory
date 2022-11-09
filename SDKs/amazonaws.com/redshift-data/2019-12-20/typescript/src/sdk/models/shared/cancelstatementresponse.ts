import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CancelStatementResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Status" })
  status?: boolean;
}
