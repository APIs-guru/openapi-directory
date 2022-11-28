import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Instance
/** 
 * A complex type that contains information about an instance that Cloud Map creates when you submit a <code>RegisterInstance</code> request.
**/
export class Instance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;
}
