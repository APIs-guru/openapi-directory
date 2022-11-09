import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Search extends SpeakeasyBase {
  @Metadata({ data: "json, name=from" })
  from?: Date;

  @Metadata({ data: "json, name=query" })
  query?: string;

  @Metadata({ data: "json, name=to" })
  to?: Date;
}
