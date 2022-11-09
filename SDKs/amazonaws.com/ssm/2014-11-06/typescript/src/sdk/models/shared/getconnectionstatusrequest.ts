import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetConnectionStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Target" })
  target: string;
}
