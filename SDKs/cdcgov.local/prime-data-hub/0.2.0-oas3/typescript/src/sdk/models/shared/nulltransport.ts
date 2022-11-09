import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NullTransport
/** 
 * A transport type that does not do anything
**/
export class NullTransport extends SpeakeasyBase {
  @Metadata({ data: "json, name=dummy" })
  dummy?: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
