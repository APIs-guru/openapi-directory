import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancelStatementRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;
}
