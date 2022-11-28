import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancelStatementResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: boolean;
}
