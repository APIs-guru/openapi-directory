import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateFindingsFilterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
