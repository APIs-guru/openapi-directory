import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ErrorsEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: string[];

  @Metadata({ data: "json, name=messages" })
  messages?: string[];
}
