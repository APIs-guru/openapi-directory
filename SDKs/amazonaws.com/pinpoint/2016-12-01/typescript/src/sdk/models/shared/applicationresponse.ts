import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApplicationResponse
/** 
 * Provides information about an application.
**/
export class ApplicationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn: string;

  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
