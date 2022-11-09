import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Operation } from "./operation";


export class EnableAddOnResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=operations", elemType: shared.Operation })
  operations?: Operation[];
}
