import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Service } from "./service";



export class GetServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Service" })
  service?: Service;
}
