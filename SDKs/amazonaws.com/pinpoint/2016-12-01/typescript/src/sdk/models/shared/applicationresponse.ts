import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApplicationResponse
/** 
 * Provides information about an application.
**/
export class ApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
