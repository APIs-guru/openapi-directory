import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceChange } from "./servicechange";



export class UpdateServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=Service" })
  service: ServiceChange;
}
