import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=all" })
  all?: ServingContextAllEnum;

  @Metadata({ data: "json, name=appType" })
  appType?: AppContext;

  @Metadata({ data: "json, name=auctionType" })
  auctionType?: AuctionContext;

  @Metadata({ data: "json, name=location" })
  location?: LocationContext;

  @Metadata({ data: "json, name=platform" })
  platform?: PlatformContext;

  @Metadata({ data: "json, name=securityType" })
  securityType?: SecurityContext;
}
