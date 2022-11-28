import { SpeakeasyBase } from "../../../internal/utils";
import { AppContext } from "./appcontext";
import { AuctionContext } from "./auctioncontext";
import { LocationContext } from "./locationcontext";
import { PlatformContext } from "./platformcontext";
import { SecurityContext } from "./securitycontext";
export declare enum ServingContextAllEnum {
    SimpleContext = "SIMPLE_CONTEXT"
}
/**
 * The serving context for this restriction.
**/
export declare class ServingContext extends SpeakeasyBase {
    all?: ServingContextAllEnum;
    appType?: AppContext;
    auctionType?: AuctionContext;
    location?: LocationContext;
    platform?: PlatformContext;
    securityType?: SecurityContext;
}
