import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateFilterResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=filterArn" })
  filterArn?: string;
}
