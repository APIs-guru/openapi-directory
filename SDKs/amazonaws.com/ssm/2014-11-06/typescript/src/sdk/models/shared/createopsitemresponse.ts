import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateOpsItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OpsItemId" })
  opsItemId?: string;
}
