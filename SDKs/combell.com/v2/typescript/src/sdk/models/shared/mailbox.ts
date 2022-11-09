import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Mailbox extends SpeakeasyBase {
  @Metadata({ data: "json, name=actual_size" })
  actualSize?: number;

  @Metadata({ data: "json, name=max_size" })
  maxSize?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
