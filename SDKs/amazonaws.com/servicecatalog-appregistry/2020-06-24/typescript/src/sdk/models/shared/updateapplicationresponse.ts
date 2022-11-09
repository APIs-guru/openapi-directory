import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Application } from "./application";


export class UpdateApplicationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=application" })
  application?: Application;
}
