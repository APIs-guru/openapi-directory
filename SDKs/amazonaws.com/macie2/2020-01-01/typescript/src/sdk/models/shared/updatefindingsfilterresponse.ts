import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateFindingsFilterResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;
}
