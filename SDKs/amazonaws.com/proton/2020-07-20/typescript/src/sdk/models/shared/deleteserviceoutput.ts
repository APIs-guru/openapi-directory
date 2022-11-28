import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Service } from "./service";



export class DeleteServiceOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: Service;
}
