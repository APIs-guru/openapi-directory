import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Application } from "./application";



export class UpdateApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=application" })
  application?: Application;
}
