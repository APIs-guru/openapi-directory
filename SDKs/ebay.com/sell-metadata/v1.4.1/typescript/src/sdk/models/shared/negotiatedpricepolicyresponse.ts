import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NegotiatedPricePolicy } from "./negotiatedpricepolicy";
import { Error } from "./error";


export class NegotiatedPricePolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=negotiatedPricePolicies", elemType: shared.NegotiatedPricePolicy })
  negotiatedPricePolicies?: NegotiatedPricePolicy[];

  @Metadata({ data: "json, name=warnings", elemType: shared.Error })
  warnings?: Error[];
}
