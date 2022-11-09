import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NotFound extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}
