import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteFilterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filterArn" })
  filterArn: string;
}
