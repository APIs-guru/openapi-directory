import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateFindingsFilterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
