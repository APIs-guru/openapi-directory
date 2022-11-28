import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateMemberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;
}
