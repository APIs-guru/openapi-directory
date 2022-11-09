import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceChange } from "./servicechange";


export class UpdateServiceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=Service" })
  service: ServiceChange;
}
