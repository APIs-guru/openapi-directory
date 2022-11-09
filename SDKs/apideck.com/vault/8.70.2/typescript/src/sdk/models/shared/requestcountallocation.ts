import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RequestCountAllocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=proxy" })
  proxy?: number;

  @Metadata({ data: "json, name=unify" })
  unify?: number;

  @Metadata({ data: "json, name=vault" })
  vault?: number;
}
