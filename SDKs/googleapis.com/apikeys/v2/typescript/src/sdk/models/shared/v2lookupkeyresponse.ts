import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// V2LookupKeyResponse
/** 
 * Response message for `LookupKey` method.
**/
export class V2LookupKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;
}
