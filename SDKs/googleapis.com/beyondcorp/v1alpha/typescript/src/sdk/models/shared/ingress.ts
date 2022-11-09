import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Config } from "./config";


// Ingress
/** 
 * Settings of how to connect to the ClientGateway. One of the following options should be set.
**/
export class Ingress extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: Config;
}
