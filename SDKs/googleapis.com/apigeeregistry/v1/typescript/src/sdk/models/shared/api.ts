import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Api
/** 
 * A top-level description of an API. Produced by producers and are commitments to provide services.
**/
export class Api extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @Metadata({ data: "json, name=availability" })
  availability?: string;

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

  @Metadata({ data: "json, name=recommendedDeployment" })
  recommendedDeployment?: string;

  @Metadata({ data: "json, name=recommendedVersion" })
  recommendedVersion?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
