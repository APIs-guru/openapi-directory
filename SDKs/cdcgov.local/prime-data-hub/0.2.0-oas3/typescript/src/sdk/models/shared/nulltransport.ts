import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NullTransport
/** 
 * A transport type that does not do anything
**/
export class NullTransport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dummy" })
  dummy?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
