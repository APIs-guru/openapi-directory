import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Componentsh0 } from "./componentsh0";


export class Componentsh0 extends SpeakeasyBase {
  @Metadata({ data: "json, name=components", elemType: shared.Componentsh0 })
  components?: Componentsh0[];

  @Metadata({ data: "json, name=describtion" })
  describtion?: string;

  @Metadata({ data: "json, name=mutlityplier" })
  mutlityplier?: string;

  @Metadata({ data: "json, name=per" })
  per?: number;

  @Metadata({ data: "json, name=sum" })
  sum?: number;
}
