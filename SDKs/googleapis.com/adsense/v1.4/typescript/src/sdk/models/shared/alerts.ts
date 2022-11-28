import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Alert } from "./alert";



export class Alerts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Alert })
  items?: Alert[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
