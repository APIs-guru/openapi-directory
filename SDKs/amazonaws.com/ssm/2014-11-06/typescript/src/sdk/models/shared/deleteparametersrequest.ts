import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteParametersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Names" })
  names: string[];
}
