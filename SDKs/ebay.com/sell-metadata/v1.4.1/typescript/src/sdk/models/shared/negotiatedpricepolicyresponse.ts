import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NegotiatedPricePolicy } from "./negotiatedpricepolicy";
import { Error } from "./error";



export class NegotiatedPricePolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=negotiatedPricePolicies", elemType: NegotiatedPricePolicy })
  negotiatedPricePolicies?: NegotiatedPricePolicy[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: Error })
  warnings?: Error[];
}
