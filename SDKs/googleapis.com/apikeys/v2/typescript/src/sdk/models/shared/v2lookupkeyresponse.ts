import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// V2LookupKeyResponse
/** 
 * Response message for `LookupKey` method.
**/
export class V2LookupKeyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: string;
}
