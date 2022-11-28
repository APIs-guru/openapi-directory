import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOpsItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OpsItemId" })
  opsItemId: string;
}
