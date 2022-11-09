import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FacetEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
