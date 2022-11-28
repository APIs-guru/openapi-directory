import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableReference } from "./tablereference";



export class CloneDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseTableReference" })
  baseTableReference?: TableReference;

  @SpeakeasyMetadata({ data: "json, name=cloneTime" })
  cloneTime?: Date;
}
