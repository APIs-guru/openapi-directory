import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ThirdPartyDependenciesData
/** 
 * Third-party dependency information
**/
export class ThirdPartyDependenciesData extends SpeakeasyBase {
  @Metadata({ data: "json, name=artifactId" })
  artifactId: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=groupId" })
  groupId: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=licenses" })
  licenses: string[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=url" })
  url: string;

  @Metadata({ data: "json, name=version" })
  version: string;
}
