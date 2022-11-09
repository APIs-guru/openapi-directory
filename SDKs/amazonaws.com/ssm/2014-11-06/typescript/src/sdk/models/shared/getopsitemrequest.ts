import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOpsItemRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=OpsItemId" })
  opsItemId: string;
}
