import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceActionDetail } from "./serviceactiondetail";



export class CreateServiceActionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServiceActionDetail" })
  serviceActionDetail?: ServiceActionDetail;
}
