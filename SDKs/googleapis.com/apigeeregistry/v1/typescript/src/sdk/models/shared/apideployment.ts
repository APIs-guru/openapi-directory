import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApiDeployment
/** 
 * Describes a service running at particular address that provides a particular version of an API. ApiDeployments have revisions which correspond to different configurations of a single deployment in time. Revision identifiers should be updated whenever the served API spec or endpoint address changes.
**/
export class ApiDeployment extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessGuidance" })
  accessGuidance?: string;

  @Metadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @Metadata({ data: "json, name=apiSpecRevision" })
  apiSpecRevision?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=endpointUri" })
  endpointUri?: string;

  @Metadata({ data: "json, name=externalChannelUri" })
  externalChannelUri?: string;

  @Metadata({ data: "json, name=intendedAudience" })
  intendedAudience?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=revisionCreateTime" })
  revisionCreateTime?: string;

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @Metadata({ data: "json, name=revisionUpdateTime" })
  revisionUpdateTime?: string;
}
