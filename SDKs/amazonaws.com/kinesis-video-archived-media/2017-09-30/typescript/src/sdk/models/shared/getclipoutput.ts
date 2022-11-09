import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetClipOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Payload" })
  payload?: string;
}
