import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;
}
