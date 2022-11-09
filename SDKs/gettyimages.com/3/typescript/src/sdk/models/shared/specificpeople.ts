import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SpecificPeople extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
