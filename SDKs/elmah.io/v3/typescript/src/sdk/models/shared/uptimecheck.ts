import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UptimeCheck extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
