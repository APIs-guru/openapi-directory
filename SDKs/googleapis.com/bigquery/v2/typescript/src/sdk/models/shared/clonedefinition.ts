import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableReference } from "./tablereference";


export class CloneDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseTableReference" })
  baseTableReference?: TableReference;

  @Metadata({ data: "json, name=cloneTime" })
  cloneTime?: Date;
}
