import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class District extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=mdr_number" })
  mdrNumber?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
