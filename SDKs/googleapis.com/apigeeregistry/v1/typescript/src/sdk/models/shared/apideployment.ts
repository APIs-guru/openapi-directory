import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApiDeploymentInput
/** 
 * Describes a service running at particular address that provides a particular version of an API. ApiDeployments have revisions which correspond to different configurations of a single deployment in time. Revision identifiers should be updated whenever the served API spec or endpoint address changes.
**/
export class ApiDeploymentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessGuidance" })
  accessGuidance?: string;

  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=apiSpecRevision" })
  apiSpecRevision?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=endpointUri" })
  endpointUri?: string;

  @SpeakeasyMetadata({ data: "json, name=externalChannelUri" })
  externalChannelUri?: string;

  @SpeakeasyMetadata({ data: "json, name=intendedAudience" })
  intendedAudience?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// ApiDeployment
/** 
 * Describes a service running at particular address that provides a particular version of an API. ApiDeployments have revisions which correspond to different configurations of a single deployment in time. Revision identifiers should be updated whenever the served API spec or endpoint address changes.
**/
export class ApiDeployment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessGuidance" })
  accessGuidance?: string;

  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=apiSpecRevision" })
  apiSpecRevision?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=endpointUri" })
  endpointUri?: string;

  @SpeakeasyMetadata({ data: "json, name=externalChannelUri" })
  externalChannelUri?: string;

  @SpeakeasyMetadata({ data: "json, name=intendedAudience" })
  intendedAudience?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionCreateTime" })
  revisionCreateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionUpdateTime" })
  revisionUpdateTime?: string;
}
