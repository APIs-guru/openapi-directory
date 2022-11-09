import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetServiceInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}
