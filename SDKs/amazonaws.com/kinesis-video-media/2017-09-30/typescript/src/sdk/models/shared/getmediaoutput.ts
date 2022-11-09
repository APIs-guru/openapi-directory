import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMediaOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Payload" })
  payload?: string;
}
