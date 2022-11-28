import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RequestCountAllocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=proxy" })
  proxy?: number;

  @SpeakeasyMetadata({ data: "json, name=unify" })
  unify?: number;

  @SpeakeasyMetadata({ data: "json, name=vault" })
  vault?: number;
}
