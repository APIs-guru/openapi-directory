import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Tax extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Percentage" })
  percentage?: number;

  @Metadata({ data: "json, name=UserId" })
  userId?: number;
}
