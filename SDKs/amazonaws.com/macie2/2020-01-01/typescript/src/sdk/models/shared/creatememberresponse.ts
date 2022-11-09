import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateMemberResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;
}
