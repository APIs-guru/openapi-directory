import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteServiceInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}
