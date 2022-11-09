import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBlockRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=block" })
  block: string;
}
