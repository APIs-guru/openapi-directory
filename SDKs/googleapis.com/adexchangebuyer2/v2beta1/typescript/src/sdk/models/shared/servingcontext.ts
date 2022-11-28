import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppContext } from "./appcontext";
import { AuctionContext } from "./auctioncontext";
import { LocationContext } from "./locationcontext";
import { PlatformContext } from "./platformcontext";
import { SecurityContext } from "./securitycontext";


export enum ServingContextAllEnum {
    SimpleContext = "SIMPLE_CONTEXT"
}


// ServingContext
/** 
 * The serving context for this restriction.
**/
export class ServingContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=all" })
  all?: ServingContextAllEnum;

  @SpeakeasyMetadata({ data: "json, name=appType" })
  appType?: AppContext;

  @SpeakeasyMetadata({ data: "json, name=auctionType" })
  auctionType?: AuctionContext;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: LocationContext;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: PlatformContext;

  @SpeakeasyMetadata({ data: "json, name=securityType" })
  securityType?: SecurityContext;
}
