import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Account extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=identifier" })
  identifier?: string;

  @Metadata({ data: "json, name=servicepack_id" })
  servicepackId?: number;
}
