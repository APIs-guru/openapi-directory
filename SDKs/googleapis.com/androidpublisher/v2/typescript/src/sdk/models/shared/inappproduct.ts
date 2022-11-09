import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Price } from "./price";
import { InAppProductListing } from "./inappproductlisting";
import { Price } from "./price";


export class InAppProduct extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultLanguage" })
  defaultLanguage?: string;

  @Metadata({ data: "json, name=defaultPrice" })
  defaultPrice?: Price;

  @Metadata({ data: "json, name=gracePeriod" })
  gracePeriod?: string;

  @Metadata({ data: "json, name=listings", elemType: shared.InAppProductListing })
  listings?: Map<string, InAppProductListing>;

  @Metadata({ data: "json, name=packageName" })
  packageName?: string;

  @Metadata({ data: "json, name=prices", elemType: shared.Price })
  prices?: Map<string, Price>;

  @Metadata({ data: "json, name=purchaseType" })
  purchaseType?: string;

  @Metadata({ data: "json, name=sku" })
  sku?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=subscriptionPeriod" })
  subscriptionPeriod?: string;

  @Metadata({ data: "json, name=trialPeriod" })
  trialPeriod?: string;
}
