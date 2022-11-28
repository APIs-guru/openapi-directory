import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Service } from "./service";



export class CreateServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Service" })
  service?: Service;
}
