import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Describes a service running at particular address that provides a particular version of an API. ApiDeployments have revisions which correspond to different configurations of a single deployment in time. Revision identifiers should be updated whenever the served API spec or endpoint address changes.
**/
export declare class ApiDeployment extends SpeakeasyBase {
    accessGuidance?: string;
    annotations?: Map<string, string>;
    apiSpecRevision?: string;
    createTime?: string;
    description?: string;
    displayName?: string;
    endpointUri?: string;
    externalChannelUri?: string;
    intendedAudience?: string;
    labels?: Map<string, string>;
    name?: string;
    revisionCreateTime?: string;
    revisionId?: string;
    revisionUpdateTime?: string;
}
