import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApiVersion
/** 
 * Describes a particular version of an API. ApiVersions are what consumers actually use.
**/
export class ApiVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
