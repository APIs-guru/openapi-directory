import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;
}
