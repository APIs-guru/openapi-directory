import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetEnvironmentInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}
