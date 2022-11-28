import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateFilterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filterArn" })
  filterArn?: string;
}
