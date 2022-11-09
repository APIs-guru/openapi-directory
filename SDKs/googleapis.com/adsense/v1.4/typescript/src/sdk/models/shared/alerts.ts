import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Alert } from "./alert";


export class Alerts extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Alert })
  items?: Alert[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
