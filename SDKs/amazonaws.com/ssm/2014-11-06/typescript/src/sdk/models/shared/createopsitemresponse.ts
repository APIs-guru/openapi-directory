import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateOpsItemResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=OpsItemId" })
  opsItemId?: string;
}
