import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Instance
/** 
 * A complex type that contains information about an instance that Cloud Map creates when you submit a <code>RegisterInstance</code> request.
**/
export class Instance extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId?: string;

  @Metadata({ data: "json, name=Id" })
  id: string;
}
